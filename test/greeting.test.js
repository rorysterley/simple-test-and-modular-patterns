'use strict';

var expect = require('chai').expect;
var greeting = require('../lib/greeting');

describe('greeting', function() {
  it('should return "hello Einstein"', function() {
    expect(greeting.greet('Einstein')).to.eql('hello Einstein');
  });
  it('should return "hello Octocat" using process.argv', function() {
    process.argv = 'Octocat';
    expect(greeting.greet(process.argv)).to.eql('hello Octocat');
  });
});
