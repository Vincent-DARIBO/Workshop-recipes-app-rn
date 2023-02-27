import concatenate from '../concatenate';

it('Should return a unique value containing the array concatenated', () => {
  let strArray = ['ceci', 'est', 'un', 'test'];
  expect(concatenate(strArray)).toBe('ceciestuntest');

  let numArray = [1, 2, 3, 4, 5, 6];
  expect(concatenate(numArray)).toBe(21);
});
