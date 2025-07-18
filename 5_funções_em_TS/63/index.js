"use strict";
//4 - Constraint em Generic Function
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 6)),
    console.log(biggestNumber("5", "9"));
console.log(biggestNumber(5, 2));
