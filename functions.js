
//function declaration
function helloworld(){
    //function body
    console.log("welcome to js function class");
}
//call function
helloworld();

//functions in expression
const welcome = function(){
    console.log("welcome to day1");
};
welcome();


const wel = function(name){
    console.log(`Hello ${name}`);
};
wel("snehal");

const calcArea = function (radius){
    let area = 3.142 * radius**2;
    console.log(area);
}
calcArea(5);

const calcArear = function (radius){
    let area = 3.142 * radius**2;
   return area;
}
const area= calcArear(5);
console.log(area);

calcArear(5);


 

//Arrow functions

// const calcAreaTwo = (radius) => {
//     return 3.142 * radius**2;
// }
// const areaTwo = calcAreaTwo(5);
// console.log(areaTwo);

const calcAreaTwo = (radius) => 3.142 * radius**2;
    
const areaTwo = calcAreaTwo(5);
console.log(areaTwo);

//conversion

const greet = function(){
    return 'welcome to js';
};
let message = greet();
console.log(message);

arrow
const greet = () =>{
    return 'welcome to js';
};
let message = greet();
console.log(message);

const invoice = function(products,tax){
    let total = 0;
    for(let counter = 0; counter < products.length; counter++){
        total += products[counter] + products[counter]*tax;
    }
    return total;
}
console.log(invoice([10,15,12,40],0.3));

//convert to arrow function
const invoicearr = (products,tax) => {
    let total = 0;
    for(let counter = 0; counter < products.length; counter++){
        total += products[counter] + products[counter]*tax;
    }
    return total;
};
console.log(invoicearr([10,15,12,40],0.3));