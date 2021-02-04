var assert = require('assert');
// var add = require('../add.js')
import {add} from "../add.js"
describe('test add.js', function () {
    describe('good case', function () {
        it('1+2 should return 3 when the value is not present', function () {
            assert.equal(add(1, 2), 3);
        });
        it('-1+2 should return 1 when the value is not present', function () {
            assert.equal(add(-1, 2), 1);
        });
    });
});