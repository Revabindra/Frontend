console.log(x);
var x=7;

//const x=9;    //more strict than other two
//let x=7;      //more strict than var and can't be reused again 
//var x=10;      //less strict than let and can be declared again 

const id= 123
let name="reva kaur"
var password="12345"
email="revabindra"

name="archi"       //updated the name
password="1234567" //updated the password
console.table([id,name,password])   // table form 
//var not used due to block scope and functional scope issue 

"use strict"         // treat all js code as new version 
//alert(3+3);        // on browser only

//number 2 to power 53 or bigint
//string ""
//boolean true/false
//null standalone value empty hota
//undefined 
//symbol unique
//object 

console.log(typeof null); // object 
console.log(typeof undefined); //undefined

//"33" = 33
//"33abc" =Nan
// true = 1, false=0 , "" false, 

//operations ----------------------------------------------------------------------------------
let str1="reva"
let str2="kaur"
let str3=str1+str2 //revakaur
console.log(str3);

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+3)// 123
console.log(1+2+"3") //33

console.log(null>0)//false
console.log(null>=0)//true
console.log(null==0)//false
//> ,< convert null to 0 

console.log(undefined>0)//false
console.log(undefined>=0)//false
console.log(undefined==0)//false

console.log("2"==2);   //true
console.log("2"===2);  //false

// datatypes how datatypes in memory processed 
//primitive(call by value) string number boolean null(empty) undefined 
//symbol(unique value to make)
// const id=Symbol('abc')
// const anid=Symbol('abc')
// console.log(id===anid)      //FALSE
// bigint
//non primitive (call by reference) array,object, function
// TYPE OF NULL = OBJECT 

//JAVASCRIPT DYNAMIC LANGUAGE - no need to declare the data type of variable explicitly  const score=100, const score=false

console.log(typeof Number);  //fun
console.log(typeof BigInt);//fun
console.log(typeof null);//obj
console.log(typeof undefined); //undf
console.log(typeof boolean);//undef
console.log(typeof String);//fun
console.log(typeof Symbol);//fun
console.log(typeof Object);//fun
console.log(typeof Array);//fun
//heap(non primitive)
//stack (primitive)

let myname="reva"
let my=myname
console.log(my);
//heap main reference value hi dono ko jati hai original value ko hi update karta hai yeh
//stack main uska copy hi milta



function getname1(){
    console.log("js1");          // hoisted 
}

var getname2 =()=>{
    console.log("js concepts");  //not hoisted 
}

var getname3=function(){
    console.log("js2");          //not hoisted
}


// var x=1;      
// a();           // a will be pushed into the call stack and 10 will be on console 
// b();           // b will be there on console 
// console.log(x);  // then 1 will print

// function a(){
    
//     var x=10;

//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }

//shortest js program - no code (window)

// var a=10;         //global space outside function
// function c(){
//     var b=10;
// }
//console.log(a);
//onsole.log(b);    // not defined
//console.log(window.a);
//console.log(this.a);  


// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },1000);
//     console.log("namaste");
// }
// x();           // namaste and 1 (after 1sec)

// function x(){
//     for(var i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }
//     console.log("namaste");
// }
// x();  // namaste and 6 (5 times after 1 sec)

// if we use let instead of var as let having block scope then 1 2 3 4 5
// create a new copy every time 

//function statement we can hoist this   same the function declaration 
// function a(){
//     console.log("a");
// }
// a();

//function expression  can't hoist this function it will be undefined 
// var b=function (){
//     console.log("b");
// }
// b();

//difference is that hoisting in above two
//anonymous function without a name
// function(){    //syntax error

// }

// named function expression
// var c=function d(){
//     console.log("c");
// }
// d(); // if we want access inside it we can but outside the function expression it will definately show the error

//parameters and arguments
// function x(a,b,c){}  //a,b,c parameters  these labels/identifiers those get this values from arguments
// x(1,2,3); //arguments values passed inside the function 

// first class function   function inside function as arguments
//  var b=function(param1){
//     return function xyz(){

//     }
//  }
//  console.log(b());


//closures -------------------------------------------------



// function outer(){
//     //var a=10;
//     function inner(){
//         console.log(10);
//     }
//      let a=10;
//     return inner;
// }
// outer()();
// var close=outer();
// close();

//CALLBACK FUNCTIONS

// setTimeout(function(){
//     console.log("timer");
// },5000);
// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });

// x y timer


function fun(){
    var a=10;
    function foo(){
        a++;
        console.log(a);
    }
    return foo
}
let f=fun()
let f2=fun()
console.log(f);
f()
f2()

function cl(){
let store=[]
//console.log(store[67]);
return function mul(a){

    if(store[a]){
        console.log("memo")
        return store[a];
    }
    console.log("not memo");
    let result=a*5;
    store[a]=result
    return result
}
}
let mul=cl()
console.log(mul(4));


//closures - when function is declared , it binds itself with lexical scope 


//currying function - those function which takes only one argument at a time 
//it reduces the chances of error 

function sum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(sum(1)(2)(3));


  let res1=setTimeout(delay ,1000);
  let res2=setInterval(delay ,2000);

  //microtasking - when we use promise it is called microtasking
 
  //event loop - it is a mechanism to execute the function in a particular order
   //callback function - to execute function in a particular order 
  /// work1(work2){
  //  ......
  // work1 complete
  //  work2()
  // }
  //to run multiple asynchronous task synchronously we use callback function
  //callback function is a function that is passed as an argument to another function
  //callbackhell - when we use callback function in a function and that function is called multiple times then it is called
  //nesting of callbacks and code is not readable
  //promises to solve the problem of callback hell
  