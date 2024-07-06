//    ***************** CONVERSION *******************
//    ***************** CONVERSION *******************
//    ***************** CONVERSION *******************
//    ***************** CONVERSION *******************


//"33" = 33
//"33abc" = NaN
//true = 1
//false = 0

//Boolean conversion 

//1 => true
//0 => false 
//"Bitu" => true
//"" => false

// const score = '33';

// console.log(typeof score);
// console.log(typeof(score));

// // if any String convert to number

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);



// const score = '33abc';

// console.log(typeof score);
// console.log(typeof(score));

// // if any String convert to number

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);    // "33abc" ye value number me convert to ho ja rha hai
// console.log( valueInNumber);          //but eska agar value check kiya jaye to ye NaN hai yani Not a Number. 


// const score = undefined;

// console.log(typeof score);
// console.log(typeof(score));

// // if any value convert to number

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log( valueInNumber);  



// const score = "Bitu Kumar";

// console.log(typeof score);
// console.log(typeof(score));

// // if any value convert to number

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log( valueInNumber);  



// const score = null;

// console.log(typeof score);
// console.log(typeof(score));

// // if any value convert to number

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log( valueInNumber);  



// const score = true;

// console.log(typeof score);
// console.log(typeof(score));

// // if any value convert to number

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log( valueInNumber);  



// const score = false;

// console.log(typeof score);
// console.log(typeof(score));

// // if any value convert to number

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log( valueInNumber);  



// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);      // true


// let isLoggedIn = 0
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);      // false


// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);      // false



// let isLoggedIn = "Bitu"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);      // true


// let isLoggedIn = undefined
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);      // false



// let someNumber = 44
// let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);



//   ******************* OPERATIONS **********************
//   ******************* OPERATIONS **********************
//   ******************* OPERATIONS **********************
//   ******************* OPERATIONS **********************

let value = 3
let negValue = -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%5);


let str1 = "Hell o"
let str2 = ' Hitesh'

let str3 = str1 + str2
// console.log(str3);


// console.log(1 + "2");         ****** This is a Rule
// console.log("2" + 1);         ****** This is a Rule 
// console.log("2" +1 + 2);      ****** This is a Rule
// console.log(1 + 2 + "2");     ****** This is a Rule



// console.log(2 + 2 - 5 * 6 / 8);
           // ye Question practice ke liye thik hai 
        //    but ye confusion create krta hai to us hissab se ye bad way hai 
            // Agar aap  Real-life me Es tarah ka code use kr rhe hai to Ek bhi people appriacate nhi karenge 
            
            //  Agar es tarah ka koe  question solve krna ho ya phir operations perform krna ho to Paranthesis use kijiye n 
            // Agar aap es tarah ka code likh rhe hai to aapka code Review hoga hi nhi 
          //  Agar code review hoga hi nhi to Aapki Pull- Request Merge hogi hi nhi




let num1, num2, num3 

num1 = num2 = num3 = 2 + 2
// console.log(num1, num2, num3);



let gameCounter = 90
// ++gameCounter         // prefix operator 
// gameCounter++        // postfix operator   ye dona yha pr equal hi work kr rha hai mgr dono ka Role alag - alag hai 
// console.log(gameCounter);

// Study-link : -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment