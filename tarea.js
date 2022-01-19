//Ejercicio 1

//parte 1
//There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

/*
var personas=["sofia", "david", "juan"];
console.log(personas);
*/

//parte 2
//Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

/*
personas.push("sara", "agustin");
personas.shift();
console.log(personas);
*/

//parte 3
//It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

/*
personas.splice(2,0,"renata");
personas.push("elena");
console.log(personas);
*/

//---------------------------------------------
//EJERCICIO 2
//Write a JavaScript program to construct the following pattern, using a nested for loop.
//*  
//* *  
//* * *  
//* * * *  
//* * * * *

//var x,y,z="";

// for(x=1; x <=6; x++)
//{
//   for(y=1; y < x; y++)
//     {
//    z=z+("*")
//      }
// console.log(z);
// z="";    
//}

//-----------------------------------------

// EJERCICIO 3
//Write while loops to do the following:

// PARTE 1
//– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.


//let x=15;

//while(x>=0){
//    console.log(x);
//    x -=0.5;

//}

// PARTE 2
//- Print all the odd numbers between 1 - 100.

//let oddnumbers=1

//while(oddnumbers<100){
//    console.log(oddnumbers);
//    oddnumbers += 2;

//}

// PARTE 3
//- Write a method with a while loop to print 1 through n in square brackets. 
//For example, if n = 6 print [1] [2] [3] [4] [5] [6]

//var w=1;
//let m='';
//while(w<=6){
//    m=m+"["+w+"]";
//    w++;
//}
//console.log(m);

//PARTE 4
//- Write a method with a while loop that computes the sum of first n positive integers: 
//sum = 1 + 2 + 3 + … + n
//Examples:
//n = 5 sum = 15
//n = 19 sum = 190

//let suma = 0;
//let n = 20;
//let i = 0;
//while (i < n) {
//    i++;
//    suma += i;
//}
//console.log(suma);