import sum from './simple';

test('check the proper sum', () => {
  expect(sum(1, 2)).not.toBe(2);
});