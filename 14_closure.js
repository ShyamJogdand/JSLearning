console.log("===== Closure topic =====");
let globalVariable = 150;
function outer(){
    console.log("This is outer function");
    let outerFunVariable = 300;
    let inner = function(){
            console.log("This is inner function");
            let innerFunVariable = 100;
            console.log(innerFunVariable);
            console.log(outerFunVariable);
            console.log(globalVariable);
    }
    return inner;
}
// outer()(); // we can also call fucntion like this
const innerFun = outer();
innerFun();
// console.log(innerFun); // gives function vise output