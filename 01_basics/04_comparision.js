// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 === 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);
// console.log("2" < 1);


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);   // Eska value true aa rha hai mgr false hoga 

// The resion is that an equality check == and comparisions> < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.


// console.log(undefined == 0);
// console.log(undefined > 0);    // En 3 cases me enki value false hi hoti hai 
// console.log(undefined < 0);


// Ye uper me jo 6-conversion hai aapko confusing create kr skta hai, 
// to aap es tarh ke conversion kop avoid kro 

// conversion jo hai basically datatype check krta  hai 
