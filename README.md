# JavaScript-Basics

1.Comments: //

2. Data Types: undefined(sth that hasn't been defined: variable that hasn't been set to anything), 
null, boolean, string, symbol(immutable primitive value that is unique), number and object(can store a lot of different key value pairs)

## typeof:  keyword returns data type of the variable

 
3. variable: Variable allows computer to store and manupulate data in a dynamic fashion. It's basically a label to point to the data
eg: 
var myName= "Aakash"		//var is able to be used throughout our whole program
myName= 8

let ourname="freetocode"	//let will only be used within  the scope of where we store that

const pi = 3.14			//const is a variable that is never changed. It is Read only; we cannot reassign values to it.

4. ; is not compulsory. You may or maynot use ;

5. console.log() allows us to see things in console.

6. var a = 10;  //var a is declaring a and var a = 10 is initializing a

7. Case Sensitivity in JavaScript: capitilizaion matters. so var Study is different than var  STUDY
generally we use camelcase which means propercamelcase is properCamelCase.

8.var firstName= "Aakash";
fistName.length			//To find firstname length

9. var firstName = "Aakash";
firstLetterOfFirstName= firstName[0];	//array to find the string letter
var thirdToLastLetterOfFirstName= firstName[firstName.length -3];

10. String Immutability : We cannot change individual letter in the string by array format. If we need to make some
changes in string we have to change the whole string
Eg:
var myStr= "Jello world"
myStr[0]="h"
gives error output

rather we need to
myStr="Hello world"

11. function : keyword to declare and initialize function
function wordBlanks(myNoun,myAdjective, myVerb,myAdverb)


12. Store multiple values with Array
var ourArray=["John", 23]

13. Nested Arrays
var ourArray[["The Universe", 42],["everything",101010]];
 
14. Arrays are mutable
var ourArray[18,64,99];
ourArray[1]=45;

15. Access multidimensional array
var myArray = [[1,2,3],[4,5,6],[7,8,9]];
var myData = myArray[0][0];

16. Manipulate arrays with push,pop shift and unshift

push: add data to the end of the arrray
var ourArray=["Simpson","j",["cat"]];
ourArray.push(["happy","joy"]);

pop:removes last element(or last array of multi dimensional array) of the array
removedFromOurArray =  ourArray.pop(); 		//["Simplson","j"]

shift:  removes first element(or first array of multi dimensional array) of the array
removedFromOurArray =  ourArray.shift();	//["j",["cat"]]

unshift: is similar to add function. It adds the element to the start of the array
Eg:
var ourArray=["Simpson","j",["cat"]];
ourArray =  ourArray.shift();			//["j",["cat"]]
ourArray = ourArray.unshift(["Paul",35])	//[["Paul",35],"j",["cat"]]
	

17.  Write Reusable with functions : 	function allow us to create reusable code in javascript
Eg:
function ourReusableFunction(){
console.log("Heyya , World");
}
ourReusableFunction();

function reusableFunction(){
console.log("Hi , World");
}
reusableFunction();

//Heyya World
//Hi World

18. Global Variable
Declared topmost, out of any scope

19. Stand in Line
 
function nextInLine(arr, item){
arr.push(item);
return arr.shift();
}

var testArr=[1,2,3,4,5]

console.log("Before: ", JSON.stringify(testArr));	//JSON.stringify stringifies array for easier display
console.log(nextinLine(testArr,6));
console.log("After: ", JSON.stringify(testArr));

// Before: [1,2,3,4,5]
// 1 
// After: [2,3,4,5,6]

20. Strict equality Operator
in JS: == compares between string and number too. So, 3 and '3' are equal
i.e
if(3 == "3")	//performs type conversion of string to number
return true

//true

So, we have strict equality operator === which doesnot compare string and number and returns strict equity 
between provided elements

21. Strict inequality
!==

22. AND operator : &&
23. OR operator: ||

24. Else if
if{
}else{
}

25. Switch
switch(val){
case1:
break;

case2:
break;

default:
break;
}

26. Build Objects: Objects are similar to arrays except instead of using indexes, we use properties to address them

var ourDog = {
"name": "Camper",
"legs": 4,
"tails" :1,
"friends" : ["everything"]
};					//name,legs,tails,friends are properties
					//Camper,4,1,["everything"] are values

var myDog={
"name": "Quincy",
"legs": 3,
"tails" :1,
"friends" : ["everything"]
};

var nameValue = ourDog.name;		//Accessing object properties with dot notation
var myDogNameValue = myDog["name"];
var myDogNameValue = myDog['name'];	

ourDog.bark = "bow-wow";		//Add new properties to an Object. So, now ourDog has5 properties
myDog['bark']= "woof"; 			

delete ourDog.bark;			//Delete Properties from an Object

27. Testing Object for Properties : We have .hasOwnProperty to test object for properties

if (myDog.hasOwnProperty("tails")){
return true;
}

28. Manipulating Complex objects : Array of Objects 

var myPlants = [
 { 
  type: "flowers",
  list: [
	"rose",
	"tulip",
	"calendula"
	]
  },
  {
   type:"trees",
   list: [
	"fir",
	"pine",
	"birch"s
	]	 
   }
];

var secondTree = myPlants[1].list[1];	//Accessing complex objects

29. while(i<5){

}

30 for(var i=0; i<5; i++){
}

31. Random fraction number between 0 and 1:   Math.random();		//Returns random decimal number between 0 and 1 but not 1

32. Random whole number:   Math.floor(Math.random()*20);   		//Returns whole number between 0 and 20 but not 20. Floor function makes it from 0 to 19 including 19

33. Ranged whole nuber: Math.floor(Math.random()*(ourMax-ourMin+1))+ourMin;

34. convert to integer:  parseInt(str);

35. convert to string: toString();
Eg:
var num = 15;
var n = num.toString();

36. Ternary Operator
 return a===b ? true: false;
 return numb>0 "positive" : num<0 "negative: "zero" 	

37. Difference between var and let
*They have same functionality however let doesn't let us declare a variable twice.
*By using let we can change the variable name different in program accordingly however it doesnt allow
 declaring multiple times. It is more efficient

38. "use strict" : Enables strict coding. To catch coding mistake such as if we create a variable but dont declare it.

39. Mutate an array declared with const:
Even if it is constant, array can be mutated by changing individual components
const s = [5,7,2];

s[0]= 2;
s[1]= 5;
s[2]= 7;

console.log(s);
//[2,5,7]

40. Prevent Object Mutation
sytax: Object.freeze(variable)


41.Arrow Functions to write concise anonymous functions
var magic = function(){
 return new Date();
};
 
This anonymous function can be converted to arrow function:

var magic= () => new Date();


42. 4 Arrow Functions with Parameters
Eg: 
 var myConcat =  function(arr1,arr2){
 return arr1.concat(arr2);			//concat is a function that concatenates two elements
};
console.log(myConcat([1,2],[3,4,5]));

//[1,2,3,4,5]


can be written as:

 const myConcat = (arr1,arr2) => arr1.concat(arr2);	//For good measure we convert var to const	
 console.log(myConcat([1,2],[3,4,5]));

//[1,2,3,4,5]

43. Higher order Arrow Functions:
Higher Order Functions
A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.
map, filter, andreduce are all higher order functions, which take a function as an argument.

When we are using map,filter, and reduce, we cannot:
break the loop
use continue

map → Executes a function on each element of an array
Eg: 
var numbers= [1,2,3,4,5];
var doubled  = numbers.map(n => n * 2);
doubled; // [2,4,6,8,10]

filter → Remove items which don’t satisfy a condition
Eg:
var numbers = [1,2,3,4,5];
var greaterThan2 = numbers.filter(n => n > 2);
greaterThan2; // [3,4,5]

Reduce → Creates a single value from elements of Array
While using reduce, we need to declare the initial value of accumulator(final result). On each iteration, inside the callback we perform some operation and that will be added to the accumulator.
Example 1: Sum of numbers
var numbers = [1,2,3,4,5];
var initialVal = 0;
let result=numbers.reduce((accu, val) => val + accu , initialVal);
console.log(result) // 15


Eg: 
const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];

const squareList = (arr) => {
const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x)
return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//[16,1764,36]


44. Rest Operator
instead of passing arguments we can use (...args) and the passed value to function are stored in an array called args
Eg: 
const sum=(function() {
  return function sum(x,y,z){
	const args = [x,y,z];
	return args.reduce((a,b)=> a+b,0);
};
}) ();
console.log(sum(1,2,3);
//6

replaced by rest operator is

const sum=(function() {
  return function sum(... args){
	return args.reduce((a,b)=> a+b,0);
};
}) ();
console.log(sum(1,2,3);
//6

45. Spread operator: is just like rest operator ... but it expands the existing array or spreads existing array
i.e equating a array and changing one of the arrays change both arrays since they are equal
so, to stop this, to copy a array to other and manipulate accordingly, we use spread operator

Eg: 
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
 arr2 = arr1;
 arr[1]= 'Potato'
})();
console.log(arr2);

//['potato', 'FEB', 'MAR', 'APR', 'MAY']

so to not change arr2 we copy elements of arr1 to arr 2. It is done using spread operator

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
 arr2 = [...arr1];
 arr[1]= 'Potato'
})();
console.log(arr2);

//['JAN', 'FEB', 'MAR', 'APR', 'MAY']

46. Destructuring Assignment: Objects
While passing arguments we can pass destructured objects instead of passing objects themselves
Eg: const stats= {
 max: 56.78,
 standard_deviation=4.34,
 min: -0.75};

const half=(functin(){

return function half({max,min}){			//instead of return function half(stats)
	return (max+min)/2.0;
	};
}) ();
console.log(half(stats));

47. Create strings using Template Literals
Eg:
const person = {
	name: "Aakash Bashyal",
	age : 25
	};

const greeting = "Hello, My name is ${person.name}! I am ${person.age} years old.";

48. Function, class, setter, getter
 Eg:
function makeClass(){
 class Vegetable{
  constructor(name){
   this.name=name'
   }
  } 
 return Vegetable;
}
const carrot =  new Vegetable('carrot');
console.log(carrot.name);

Eg:
class Book{
 constructor(author){
  this.author= author;
  }

//getter
get writer(){
 return this._author;
}

//setter
set writer(updatedAuthor){
 this._author = updatedAuthor;
 }
}

49. prompt : to display prompt message on webpage to take inputs or alert
alert: to display message like prompt as alert

**Theme:Ayu Mirage
**Icon: Material Icon Theme, VScode-icons

<!-- run at vs code with options: open with live server(p.s. download live server via extensions menu) -->
<!--For additional JavaScript tutorial recommended site: edureka-->


