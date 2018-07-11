const expect = require('chai').expect;

const ecto1 = require('../index');

describe('Ecto1 tests', () => {
  it('Should return the message about ghosts', () => {
    const output = ecto1();
    expect(output).to.be.ok;
    expect(output).to.equal('I ain\'t afraid of no ghosts!');
  });
});