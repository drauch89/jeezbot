import { generateReply } from '../src/bot';

test('generateReply handles greetings', () => {
  expect(generateReply('hello')).toMatch(/hello/i);
});
