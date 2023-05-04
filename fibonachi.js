const packingList = ["shoes", "socks", "clothes", "brush", "toothpaste"];
const forLoop = document.getElementsByClassName("forloop")[0];
const whileLoop = document.getElementsByClassName("whileloop")[0];
const doWhile = document.getElementsByClassName("dowhile")[0];
const fibo = document.getElementsByClassName("fibo")[0];
const fibowhile = document.getElementsByClassName("fibowhile")[0];
const fibodowhile = document.getElementsByClassName("fibodowhile")[0];



// using for loop 
let forLoopLi = "";
for (let i = 0; i < packingList.length; i++) {
    forLoopLi += `<li>${i + 1}. ${packingList[i]}</li><br>`;
}
forLoop.innerHTML = forLoopLi;

// using while loop 
let whileLoopLi = "";
let j = 0;
while (j < packingList.length) {
    whileLoopLi += `<li>${j + 1}. ${packingList[j]}</li><br>`;
    j++;
}
whileLoop.innerHTML = whileLoopLi;


// using do while loop 
let k = 0;
let doWhileLi = "";
do {
    doWhileLi += `<li>${k + 1}. ${packingList[k]}</li><br>`;
    k++;
} while (k < packingList.length);

doWhile.innerHTML = doWhileLi;


// fibonacci series 

//using for loop
let a = 0;
let b = 1;
console.log(a)
console.log(b)
let fiboLi = "";
for (let i = 0; i <= 40; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    fiboLi += `<li>${temp}</li><br>`;
}
fibo.innerHTML = fiboLi;

//using while loop

let fibowhileLi = "";
let i = 0;
let c = 0;
let d = 1
while (i <= 40) {
    let temp = c + d;
    c = d;
    d = temp;
    fibowhileLi += `<li>${temp}</li><br>`;
    i++;
}
fibowhile.innerHTML = fibowhileLi;

//using do while

let fiboDoWhileLi = "";
let e = 0;
let f = 1;
let counter = 0
do{
    let temp = e + f;
    e = f;
    f = temp;
    fiboDoWhileLi += `<li>${temp}</li><br>`;
    counter++;
}while(counter<=40);

fibodowhile.innerHTML = fiboDoWhileLi;




