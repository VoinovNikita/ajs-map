/* eslint-disable linebreak-style */
import ErrorReposoitory from '../map';

test('error text', () => {
  const error = new ErrorReposoitory();
  error.mapError(502, 'server error');
  expect(error.translate(502)).toBe('server error');
});


test('error unknown', () => {
  const error = new ErrorReposoitory();
  expect(error.translate('')).toBe('Unknown error');
});
