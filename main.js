/*
    Logical Or || 
    --Null + Undifined + Any Falsy Value
    Nullish Coalscing Operator ??
    --Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));


let price = 100;

console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);

