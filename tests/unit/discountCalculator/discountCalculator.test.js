import { it, describe, expect} from 'vitest';
import { calculateDiscount } from '../../../src/discountCalculator';

describe('discountCalculator()', () => {
    it.each([
        [-1, true, 0],
        [-1, false, 0]
    ])('should return 0 if total < 0 regardless of membership', (input1, input2, expected) => {
        expect(calculateDiscount(input1, input2)).toBe(expected);
    });

    it('should return calculated discount for members (total * 0.2) if isMember flag is provided', () => {
        const total = 5;
        const discountRatio = 0.2;
        const expected = total * discountRatio;
        const result = calculateDiscount(total, true);
        expect(result).toBe(expected);
    });

    it('should return calculated discount for non members (total * 0.1) if isMember flag is not provided or false', () => {
        const total = 5;
        const discountRatio = 0.1;
        const expected = total * discountRatio;
        const result = calculateDiscount(total, false);
        expect(result).toBe(expected);
    });

    it.each([
        [0, true, 0],
        [0, false, 0]
    ])('should return 0 if total is 0 regardless of membership', (input1, input2, expected) => {
        expect(calculateDiscount(input1, input2)).toBe(expected);
    });

    it.each([
        ['30', true, 6],
        ['50', false, 5]
    ])('should work as expected if total is numeric string', (input1, input2, expected) => {
        expect(calculateDiscount(input1, input2)).toBe(expected);
    });

    it.each([
        [null, true, 0],
        [[], false, 0]
    ])('should return 0 if total is falsy regardless of membership', (input1, input2, expected) => {
        expect(calculateDiscount(input1, input2)).toBe(expected);
    });

    it.each([
        [undefined, true],
        [{}, false]
    ])('should yield NaN if the total is undefined or empty object regardless of membership', (input1, input2) => {
        expect(calculateDiscount(input1, input2)).toBeNaN()
    });
})