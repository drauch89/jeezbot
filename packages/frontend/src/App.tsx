import React, { useEffect, useRef, useState } from 'react';

type Message = { from: 'user' | 'bot'; text: string; time?: string };

export default function App() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const raw = localStorage.getItem('jeezbot:messages');
      return raw ? (JSON.parse(raw) as Message[]) : [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // persist messages
  useEffect(() => {
    try {
      localStorage.setItem('jeezbot:messages', JSON.stringify(messages));
    } catch {
      // ignore storage errors
    }
    // auto-scroll
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  function addMessage(from: Message['from'], text: string) {
    const msg: Message = { from, text, time: new Date().toLocaleTimeString() };
    setMessages((m) => [...m, msg]);
    return msg;
  }

  async function send() {
    if (!text.trim()) return;
    const userMsg = addMessage('user', text.trim());
    setText('');
    setLoading(true);

    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text })
      });
      const data = await res.json();
      addMessage('bot', data.reply);
    } catch (err) {
      addMessage('bot', 'Error: could not reach backend');
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function clearChat() {
    setMessages([]);
    try {
      localStorage.removeItem('jeezbot:messages');
    } catch {}
  }

  return (
    <div className="app-root">
      <h1>Jeezbot</h1>

      <div className="chat-window" ref={containerRef}>
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.from}`}>
            <div className="bubble">
              <div className="meta">
                <span className="from">{m.from}</span>
                <span className="time">{m.time}</span>
              </div>
              <div className="text">{m.text}</div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <div className="bubble typing">Bot is typing<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></div>
          </div>
        )}
      </div>

      <div className="controls">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a message and press Enter to send"
        />
        <button onClick={send} disabled={loading || !text.trim()}>
          Send
        </button>
        <button onClick={clearChat} className="clear">
          Clear
        </button>
      </div>

      <div className="footer">Built with ❤️ — packages/frontend</div>
    </div>
  );
}
