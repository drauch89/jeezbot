// Minimal bot logic. Keep this file small and testable.
// Extend this function to plug in real NLP, model calls, or rule-based logic.

/**
 * Generate a reply for a given user message.
 * Exported for unit testing. Keep deterministic and side-effect free.
 */
export function generateReply(message: string): string {
  const trimmed = (message ?? '').trim();
  if (!trimmed) return 'Please say something!';

  // Basic rule examples:
  const lower = trimmed.toLowerCase();
  if (lower === 'ping') return 'pong';
  if (lower.includes('hello') || lower.includes('hi')) return 'Hello! How can I help?';

  // Default: short echo with a friendly prefix.
  return `Jeezbot heard: ${trimmed}`;
}
