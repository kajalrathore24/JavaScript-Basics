// console.log("hello world");

// values and variable n javascript
// var myName= 'kajal rathore';
// console.log(myName);

// Data types---- 6
// undefined,boolean,number,string,bigInt,Symbol
// var myName= 'kajal rathore';
// console.log(myName);
// console.log(typeof(myName))
// console.log(typeof(myAge))

// console.log(10+"20")
// console.log(9-"5")     //bug
// console.log("10"+"20")
// console.log(" "+ " ")
// console.log(0+"")
// console.log("kajal"-"rathore")
// console.log(true+true)    //true:1,false:0

//  Difference between null and undefined?
// what is a NaN? property of global object,variable in global scope,initial value Not a Number

// var iAmUseless=null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));     //bug
// var iAmStandby;
// console.log(iAmStandby);

// if(isNaN(myName)){
//     console.log("plz enter a valid number");
// }

// NaN practice
// console.log(NaN===NaN)
// console.log(Number.NaN===NaN)
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));



// Expressions and operators
// console.log(5+20)
//Types of operators-- 1. Arithmetic operators,2.Assignment 3.Compariosn 4.logical 5.String 6.Conditional(ternary) operators

// var x=5;
// var y=5;
// console.log("Is both the x and y are equal or not"+ x==y);
// console.log(x==y);
// console.log(`Is both the value of x and y are equal : ${x==y}`);

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);
// console.log(81%8);

// Increment and decrement operator
// operator: x++:postfix or ++x--prefix or x--:postfix 0r --x:prefix

// Logical and (&&) or logical conjunction, Logical or(||) or logical disjunction, Logical not(!) or logical complement or negation

// String concatenation operators-- concat 2 strings together




// Javascript class
// let score=50;
// if(score>40){
//     console.log('hello');
// }else{
//     console.log('hii');
// }

// let isTrue=true
// isTrue?console.log('hello'):console.log('hi');

// console.log(0==false);
// console.log(5+'5');

// let score=90;
// let a=85;
// if(a>70 && score>80){
//     console.log('pass');
// }else{
//     console.log('fail');
// }

// let score=90;
// let a=85;
// if(score>90 && a>85){
//     console.log('A');
// }else if(score>80 && a>75){
//     console.log('B');
// }else{
//     console.log('fail');
// }


// function
// function add(name1,name2){                //received value-parameter
//     console.log(name1+name2);
//     console.log(`my name is ${name1}`);
// }
// add('khan','hii')       //function calling (passed value-argument)

// advantage of function-code repetation  
// for adding two values-concatenation(+),Back tick(``)


// Data type-object-real world entity which has some property(.)

// let obj={
//     name:'iphone',
//     price:140000,
//     isBuy:false
// }
// console.log(obj.name);
// console.log(obj.abcdefgh);

// function add(a){
//     console.log(a.name);
// }
// let obj={
//     name:'iphone',
//     price:140000,
//     isBuy:false
// }
// add(obj)

// this-refers the current object   obj=this
// let obj={
//     java:40,
//     fullStack:60,
//     total:function(){
//         console.log(this.java+this.fullStack);
//     }
// }
// obj.total()


// Array -is a contiguous memory location stored homogenous type of data---------------------------------------------
// with let we can never declare the variable
// Array in javascript we can store heterogenous data type
// let arr=[1,'hello',true];

// Loop-for,while,do-while
// loop in javascript-for-in loop (always print the index value of array),for of loop
// for(let i=0;i<5;i++){
//     console.log(i);
// }

// let arr1=[1,2,3,4,5]
// for(let i in arr1){
//     console.log(i);
// }
// for(let i of arr1){
//     console.log(i);
// }

// for-in+for of------for-each(3 parameter)   (It doesn't make any new array it modeifies in that array only)---It doesn't return any value

// function add(){

// }

// const add=()=>{

// }

// Callback function-when a function contains another function as a argument
// callback function takes the argumnt 3

// let arr2=[1,2,3,4,5,6]
// arr2.forEach((ele, index,arr)=>{                        //callback function
//     console.log(ele,index,arr);
    
// })
// let new1=arr2.forEach((ele, index,arr)=>{                        //callback function
//     return ele;
// })
// console.log(new1);

// for each works as same as map
// . method always works on object

// Map--------------------------------------------
// 3 parametrs number,index,array
// Map function return new array
// it return the value
let arr2=[1,2,3,4,5,6]
// let new1=arr2.map((ele,index,arr)=>{
//     return ele;
// })
// console.log(new1);


// Map reduced function
// filter function
// let filter=arr2.filter((ele)=>{
//     return ele>3
// })
// console.log(filter);

// reduced function

// let sum=arr2.reduce((a,b)=>{
//     console.log(a)
//     // console.log(b)
//     return a+b

    
// })
// console.log(sum);

// let arr6=[1,2,3,4,5,6,7,8,9];
// let new1=arr6.filter((ele)=>{
//     return ele>3;
// })
// let sum=new1.reduce((a,b)=>{
//     return a+b;
// })
// console.log(sum);




// let userName='gla'
// let person={
//     userId:'any',
//     password:12345
// }
// console.log(userName)

let userName='gla'   
add()   
function add(){
    let name1='hello'       //whole body
    console.log(name1);
}
console.log(userName)

// in the above code it creates two execution context first it creates the global execution context as it doesn't get the functon value and there is another execution context for function -child of global which is another global execution context and worked same as previous that i memory execution and code execution
// if the work of execution context is finished then it destroyed the previous context and works on another execution context





