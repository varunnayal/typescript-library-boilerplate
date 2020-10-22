// import { equal } from 'assert';
import getValue from '../src/index';
import { assert } from 'console';

// const a = 10;

describe('Testing started using sinon for build folder(dist)', () => {
    it('function check', () => {
        assert(getValue() === 'Hello World', 'my test case passes');
    });
});
