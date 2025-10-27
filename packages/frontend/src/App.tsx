import React, { useState } from 'react';

type Message = { from: 'user' | 'bot'; text: string };

export default function App() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!text.trim()) return;
    const userMsg: Message = { from: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setText('');
    setLoading(true);

    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text })
      });
      const data = await res.json();
      const botMsg: Message = { from: 'bot', text: data.reply };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      setMessages((m) => [...m, { from: 'bot', text: 'Error: could not reach backend' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Jeezbot</h1>
      <div style={{ border: '1px solid #ddd', padding: 10, minHeight: 200 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.from === 'user' ? 'right' : 'left' }}>
            <strong>{m.from}:</strong> {m.text}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10 }}>
        <input value={text} onChange={(e) => setText(e.target.value)} style={{ width: '70%' }} />
        <button onClick={send} disabled={loading} style={{ marginLeft: 8 }}>
          Send
        </button>
      </div>
    </div>
  );
}
