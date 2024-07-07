// Types of datatypes
    // :- There are two types of dataTypes 

//(1) Primitive datatype
           // :- Primitive datatpes ke under 7-datatypes aate hai
           // 7-types :-  String, Number, Boolean, null, undefined, Symbol, BigInt

//Boolean :- Boolean mtlb true false  yani Yes or No

//null :- null ka mtlb empty hota hai , null ka mtlb 0 nhi hota hai, empty mtlb bilkul khali , kuchh bhi nhi

//undefined :- Assume kijiye  aap variable declare kr diye hai 
            // mgr aap usme kya value dalenge ye declare nhi hai
            // variable declare hai , memory-space declare hai ,
            // mgr usme kya value aayegi ye declare nhi hai 
            // Esliye esko undefined bolte hai 

//symbol :- kisi bhi value ko unique banane ke liye symbol use hota hai 

//BigInt :- BigInt kuchh bhi nhi hai eska mtlb aapki sari value number
        //  me cover ho jati hai  mgr kuchh scientific value 
        //  ya bahot jyada bdi value hai jo handle nhi ho rhi hai
        //  to hm usko BigInt me use kr lete hai 



//(2) Reference datatype (Non- primitive datatype)
         // :- Reference datatype ke under 3-datatype aate hai 
    // 3-types :- Array[], objects{}, functions(){}


const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);
// console.log(typeof(anotherId));


let bigNumber = 12741241873542127212n


const heros = ["shakti", "mukti", "sushil"]
// console.table(typeof heros);

let myObj = {
    name: "bitu",
    age: 22
}
// console.table(typeof(myObj));

let myFunction = function(){
    console.log("hello world");
}

// console.log(typeof(myFunction))







    

// ******** javascript jo hai wo statically type hai ya dynamic type hai

    // JavaScript is a dynamically typed language.
    // Here's why:
    // Type checking at runtime:
    // In JavaScript, you don't specify the type of a variable when you declare it. The type is determined at runtime based on the value assigned to it.
    // Flexible variable types:
    // You can assign different types of values to the same variable during the execution of your code.
    // No type declarations:
    // You don't need to explicitly declare the data types of variables, function parameters, or return values.
    // Example:
    // JavaScript
    
    // let x = 10; // x is a number
    // x = "Hello"; // x is now a string
    // This flexibility is one of the reasons JavaScript is easy to learn and use, but it can also lead to errors that are only caught at runtime.
    // In contrast, statically typed languages like TypeScript or Java require you to define the type of a variable when you declare it, and the type cannot change during execution. This allows for catching type errors at compile time, making your code more robust.



    