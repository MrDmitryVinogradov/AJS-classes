import Zombie from '../js/classes/Zombie';

test('should create Zombie', () => {
  const zombie = new Zombie('User');
  expect(zombie.name).toBe('User');
});

test('name length', () => {
  expect(() => new Zombie('fffffffffffff')).toThrow('Character name length must be 3-9 symbols');
});
