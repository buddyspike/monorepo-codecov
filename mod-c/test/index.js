const assert = require('chai').assert;
const {eq, gt} = require('../src/index');

describe('tests', () => {
  it('should compare same value', () => {
    assert.isTrue(eq('a', 'a'));
  });

  it('should compare different values', () => {
    assert.isFalse(eq('a', 'b'));
  });

  it('should compare bigger value', () => {
    assert.isTrue(gt(2, 1));
  });
});
