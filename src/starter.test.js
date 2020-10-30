import { TestScheduler } from 'jest';
import { add } from './starter';

test('add can sum two numbers', () => {
    expect(add(3, 7)).toBe(10);
});