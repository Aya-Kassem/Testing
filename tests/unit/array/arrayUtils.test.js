import { it, expect, describe } from 'vitest';
import { filterAdults } from '../../../src/arrayUtils';

describe('filterAdults()', () => {
    it('should filter people with age >= 18', () => {
        const people = [{name: 'ahmed', age: 15}, {name: 'samir', age: 25}];
        const result = filterAdults(people);
        const expected = people.filter((person) => person.age >= 18);
        expect(result).toEqual(expected);
    });


    it('should return an empty array if no age property found', () => {
        const input = [{name: 'ahmed', address: ''}];
        const result = filterAdults(input);
        expect(result).toEqual([]);
    });

    it('should return an empty array for an empty input', () => {
        const input = [];
        const result = filterAdults(input);
        expect(result).toEqual([]);
    });

    it('should return an empty array if no person found with age >= 18', () => {
        const input = [{name: 'May', age: 12}, {name: 'Alice', age: 10}];
        const result = filterAdults(input);
        expect(result).toEqual([]);
    });

    it('should handle non-object array elements', () => {
        const input = [2,3];
        const result = filterAdults(input);
        expect(result).toEqual([]);
    });

    it('should filter correctly for mixed types input', () => {
        const input = [{age: 20}, 2, 'a'];
        const result = filterAdults(input);
        const expected = input.filter((person) => person.age >= 18);
        expect(result).toEqual(expected);
    });

    it('should throw an error if the argument is not an array', () => {
        const resultFn = () => filterAdults(2);
        expect(resultFn).toThrow();
    });

    it('should throw an error if no argument provided', () => {
        const resultFn = () => filterAdults();
        expect(resultFn).toThrow();
    });


});