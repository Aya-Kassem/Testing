import { describe, it, expect } from 'vitest';
import { logMessage } from '../../../src/logger';

// log messages
// if receieved another function will executed
// if empty message === undefined in the console

describe('logMessage()', () => {
    it('should log input messages with date', () => {
        const msg = 'Learning js testing';
        const result = logMessage(msg);
        const expected = `[${new Date().toISOString()}] ${msg}`;
        expect(result).toEqual(expected);
    })
})