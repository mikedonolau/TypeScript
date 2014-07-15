//// [targetTypeBaseCalls.ts]
function foo(x: (s: string) => void) { }
 
 
 
class Foo { constructor(x: (s: string) => void){} }
 
 
 
foo(function(s) { s = 5 });  // Error, can’t assign number to string
 
 
 
new Foo(function(s) { s = 5 });  // error, if types are applied correctly
 
 
 
class Bar extends Foo { constructor() { super(function(s) { s = 5 }) } }  // error, if types are applied correctly


//// [targetTypeBaseCalls.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
function foo(x) {
}
var Foo = (function () {
    function Foo(x) {
    }
    return Foo;
})();
foo(function (s) {
    s = 5;
});
new Foo(function (s) {
    s = 5;
});
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        _super.call(this, function (s) {
            s = 5;
        });
    }
    return Bar;
})(Foo);