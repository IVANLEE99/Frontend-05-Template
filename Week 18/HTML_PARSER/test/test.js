var assert = require('assert');
import parseHTML from "../src/parser.js"
describe('test parseHTML.js', function () {
    describe('good case', function () {
        it('<a></a>', function () {
            let tree = parseHTML('<a></a>');
            assert.equal(tree.children[0].tagName,"a");
            assert.equal(tree.children[0].children,0);
        });
        it('<a href="//youngs"></a>', function () {
            let tree = parseHTML('<a href="//youngs"></a>');
            // console.log(tree);
            // console.log(tree);
            // console.log(tree.children[0]);
            assert.equal(tree.children.length,1);
            assert.equal(tree.children[0].children.length,1);
        });
        it('<a href></a>', function () {
            let tree = parseHTML('<a href></a>');
            // console.log(tree);
            // console.log(tree);
            // console.log(tree.children[0]);
            assert.equal(tree.children.length,1);
            assert.equal(tree.children[0].children.length,1);
        });
        xit('<a href id></a>', function () {
            let tree = parseHTML('<a href id></a>');
            assert.equal(tree.children.length,1);
            assert.equal(tree.children[0].children.length,1);
        });
        xit('<a href="abc"></a>', function () {
            let tree = parseHTML('<a href="abc"></a>');
            // console.log(tree);
            // console.log(tree);
            // console.log(tree.children[0]);
            assert.equal(tree.children.length,1);
            assert.equal(tree.children[0].children.length,1);
        });
        it('<a href=abc></a>', function () {
            let tree = parseHTML('<a href=abc></a>');
            // console.log(tree);
            // console.log(tree);
            // console.log(tree.children[0]);
            assert.equal(tree.children.length,1);
            assert.equal(tree.children[0].children.length,1);
        });
    });
});