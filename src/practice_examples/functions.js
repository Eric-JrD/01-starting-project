function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello('George');

function add(x, y){
    return x + y;
}

console.log(add(2,3));
console.log(add('hello','world'));

//Functions as parameters

function sayHi(myFunc){
    console.log('Hi!');
    myFunc(); 
}
function bye(){
    console.log("bye");
}
function lol(){
    console.log("lol");
}
sayHi(bye);
sayHi(lol);

//Functions as Expressions
let age = 39 + 2;

//operants are age 39 and 2
//operators are let = and +

sayHi(function(){
    console.log('lololol')  //this is an anyononmous function (NO NAME)
});

function lololol(){
    console.log('lololol');
}

let iLoveJS = function(){
    console.log('i love js');
}
iLoveJS();

let expressionAdd = function(x, y){
    return x + y;
}
console.log(expressionAdd(39,2));

//arrow funcitons

let addArrow = (x, y) => {
    return x + y;
}

let addArrowShort = (x , y) => x + y;
let squared = x => x*x;
