'use strict';

var checkEmail = require('./check-email'),
    emailData = require('./lib/emailData');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

var type = function (obj) {
    return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

exports['checkEmail'] = {
    setUp: function (done) {
        // setup here
        done();
    },
    'no args': function (test) {
        test.expect(4);
        // tests here
        checkEmail(/.*/, function (err, data) {
            test.equal(type(data), 'object', 'should be object.');
            test.equal(type(data.pass), 'array', 'should be array.');
            test.equal(type(data.fail), 'array', 'should be array.');
            test.equal(data.pass.length + data.fail.length, emailData.length, 'should be equal');
        });

        test.done();
    }
};
