import { it, expect, describe } from 'vitest';
import { add } from '../../../src/mathUtils';

describe('add()', () => {
    it('should return the sum of two numbers provided', () => {
        const val1 = 1;
        const val2 = 2;
        const result = add(val1, val2);
        expect(result).toBe(val1 + val2);
    });

    it('should yield NaN if one argument is provided', () => {
        const result = add(1);
        expect(result).toBeNaN();
    });
    
    it('should yield NaN if no arguments are provided', () => {
        const result = add();
        expect(result).toBeNaN();
    });

    it('should the correct sum if the arguments are decimals', () => {
        const value1 = 1.2;
        const value2 = 2.3;

        const result = add(value1, value2);
        expect(result).toBe(3.5)
    });

    it('should returm the sum if string numeric values provided', () => {
        const value1 = '3';
        const value2 = 2;

        const result = add(value1, value2);
        expect(result).toBe(+value1 + +value2);
    });
});