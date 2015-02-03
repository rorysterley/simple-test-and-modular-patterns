'use strict';

var expect = require('chai').expect;
var greeting = require('../lib/greeting');

describe('greeting', function() {
  it('should return hello Einstein', function() {
    expect(greeting.greet('Einstein')).to.eql('hello Einstein');
  });
});
