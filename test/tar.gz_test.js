"use strict";

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

var task = require("../tasks/tar.gz"),
    fs = require("fs");

exports["targz"] = {
    setUp: function(done) {
        // setup here
        done();
    },
    "targz sqlite3": function(test) {
        test.expect(1);
        var actual;

        actual = fs.statSync("tmp/node_sqlite3.node");

        test.equal(actual.size, 831488);

        test.done();
    }
};