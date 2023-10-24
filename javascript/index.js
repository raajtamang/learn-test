// let abc = 5;
// abc = 6;
// console.log(abc);


// var ced=10;
// ced=15;
// var ced=22;
// console.log(ced);

// const ced =7;
// console.log(ced);

// let a =5;
// // console.log(a, typeof a);

// let name =5;
// let anotherName = "5"

// let sum1 = name + name;
// let sum2 = anotherName + anotherName;
// console.log(name, typeof(name))
// console.log(sum1);
// console.log(anotherName, typeof(anotherName));
// console.log(sum2);



// let cash = "1000";
// let cash2 = "2000";
// let totalBalance = cash + cash2;
// console.log(totalBalance);

// let FirstName = "raj";
// let LastName = "kumar";
// let fullName = FirstName + " " + LastName;
// console.log(fullName);

// console.log(typeof NaN);


// https://member.improweb.com/#/landing-page/accounts

// info@zesticap.co.za
// ZESP01

let a = 5;
function square(number) {
    return number * number
  }
  let asquare = square(a);
  console.log("The value of the variable 'a' is:", asquare);


  let b= 10;
  function dsquire(){
    return b*b
  }
  let bdsquire = dsquire(b);
  console.log("The value of the variable 'b' is:", bdsquire);

  let c=3;
  function cube(){
    return c*c*c
  }
  let ccube = cube(c);
  console.log("The value of the variable 'c' is:", ccube);

  let d=4;
  function squareRoot(){
    return d*d
  }
  let dsquareRoot = squareRoot(d);
  console.log("The value of the variable 'd' is:", dsquareRoot);

  let e=5;
  function maximize(){
    return e*e*e

  }
  let emaximize = maximize(e);
  console.log("The value of the variable 'e' is:", emaximize);


console.log(isNaN(123));
console.log(isNaN("123"));
console.log(isNaN("a"));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN(null));
console.log(isNaN(-1.32));
console.log(isNaN(1+2));
console.log(isNaN (b));



let age =19;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
    console.log(age>18);
}

let identity = false;
if(identity){
    console.log("You are eligible to enter in school");
}
else{
    console.log("You are not eligible to enter in school");
}

let ages =21;
if(ages>21){
    console.log("You are eligible to drink");
}

else{
    console.log("You are not eligible to drink");
}

let names = ["ram, sita, gita"];
names[0] = "Ram";
names[1] = "Sita";
names[2] = "Gita";
for(let i=0 ;i<names.length;i++){
    console.log(names[i]);
}
//names.pop(); // delete last items from the array
names.push("Jayanti");
console.log(names.length);
// console.log(names[2]);



let fruits =["apple", "banana","orange","papaya","Tanerine","Raspberries"];
console.log("fruits length", fruits.length);

let deletedLastItem = fruits.pop();
console.log(deletedLastItem);

// fruits.pop();
fruits.push("pineapple"); // add new elemenent or items in last
console.log(fruits);

fruits.shift() // delete first array
console.log(fruits);

let deletedItem = fruits.shift()
console.log(deletedItem);



fruits.unshift("Gauva"); // add first new item or element
console.log(fruits);

// fruits.splice(0,2); // use to delete array element
// console.log(fruits);

console.clear();

console.log(fruits);



let sliced = fruits.slice(0,2); // copy array item. 
console.log(sliced);

console.clear();

// Array toString() // to making string
// Array pop() 
// Array push() 
// Array push() 
// Array shift() 
// Array unshift() 
// Array join() // to join element (-,+, or, and etc)
// Array concat() 
// Array flat() 
// Array splice() 
// Array slice() 


let nam = ["raj", "ram", "bibek", "ravi"];
console.log(nam);

console.log(nam.toString().toUpperCase());

let string=nam.toString();
console.log(string.split(","));


console.log(nam.join(" + "));

let mergeArray = nam.concat(["rajaram, tamang"]);
console.log(mergeArray);

console.log(delete nam[0]);
console.log(nam);

let 







 
