import { userSetter } from 'core-js/fn/symbol';
import Bowerman from '../js/classes/Bowerman';

test('should create Bowerman', () => {
  const hero = new Bowerman('User');
  expect(hero.name).toBe('User');
});