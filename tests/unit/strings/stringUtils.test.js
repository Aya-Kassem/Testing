import { it, expect, describe } from 'vitest';
import { capitalizeWords } from '../../../src/stringUtils';


describe('capitalizeWords()', () => {
    it('should return the string with first letter of each word capitalized', () => {
        const str = 'learning javascript testing';
        const result = capitalizeWords(str);
        expect(result).toBe('Learning Javascript Testing');
    });

    it('should lowercase all letters if capital letters are provided', () => {
        const str = 'LEARNING JAVASCRIPT TESTING';
        const result = capitalizeWords(str);
        expect(result).toBe('Learning Javascript Testing');
    });


    it('should return an empty string if no argument is provided. or the argument is empty string', () => {
        const noArgumentsResult = capitalizeWords();
        const emptyStringArgumentResult = capitalizeWords('');
        expect(noArgumentsResult).toBe('');
        expect(emptyStringArgumentResult).toBe('');
    });

    it.each([
        [2, ''],
        [null, ''],
        [{}, ''],
        [[], ''],
      ])('should return an empty string for non-string input %s', (input, expected) => {
        expect(capitalizeWords(input)).toBe(expected);
      });
});