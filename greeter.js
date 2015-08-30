/**
 * Created by Ahmed butt on 8/6/2015.
 */
//var MyClass = (function () {
// the self-invoking function is the
// environment that will be remembered
// by the closure
// function MyClass() {
// MyClass is the inner function,
// the closure
//        MyClass.prototype.add = function (x, y) {
//          return x + y;
//    };
//  return MyClass;}
// })();
// var classInstance = new MyClass();
// console.log(classInstance);
// console.log("result : " + classInstance.add(1, 2));
var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.add = function (x, y) {
        return x + y;
    };
    return MyClass;
})();
var classInstance = new MyClass();
console.log(classInstance.add(1, 2));
console.log(classInstance);
