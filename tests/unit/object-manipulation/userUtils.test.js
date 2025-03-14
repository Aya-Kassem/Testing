import { describe, it, expect } from 'vitest';
import { updateUser } from '../../../src/userUtils';

describe( 'updateUser()', () => {
    it('should take two objects and combine them in one object and return that object', () => {
        const user = {name: 'aya'};
        const updates = {age: 30};
        const expected = {...user, ...updates};
        const result = updateUser(user, updates);
        expect(result).toEqual(expected);
    });

    it.each([
        ['aya', {age: 30}],
        [{name: 'aya'}, 30],
        [5, ''],
        [[], []]
    ])('should throw if any of the inputs was not an object', (user, updates) => {
        const resultFn = () => updateUser(user, updates);
        expect(resultFn).toThrow('Not Valid Object');
    });

    it('should return retsult if only one object provided', () => {
        const input = {name: 'aya'};
        const result = updateUser(input);
        expect(result).toEqual(input);
    })

    it('should not duplicate any shared values between the two input objcects', () => {
        const user = {name: 'aya', age: 30};
        const updates = {address: 'Egypt', age: 30};
        const expected = {name: 'aya', age: 30, address: 'Egypt'};
        const result = updateUser(user, updates);
        expect(result).toEqual(expected)
    })
})