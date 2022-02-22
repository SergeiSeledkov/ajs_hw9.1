import ArrayBufferConverter from '../js/ArrayBufferConverter';
import getBuffer from '../js/getBuffer';

test('Check converter', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  arrayBufferConverter.load(getBuffer());
  expect(arrayBufferConverter.toString()).toBe(expected);
});
