'use strict';
//Create Object
function createMyObject (){
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function (){
      return 'hello';
    }
  };
}

console.log(createMyObject());

//Update Object

let obj = {};
function updateObject(obj) {

  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

console.log(updateObject(obj));


//Self-reference

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    }
  };
  return person;
}

console.log(personMaker().fullName());


//deleting keys

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

console.log(keyDeleter(sampleObj));


//Make student reports

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

function makeStudentReports(data) {
  let newArray = [];
  for (let i = 0; i < data.length; i++) {
    newArray.push(`${data[i].name} : ${data[i].grade}`);
  }
  return newArray;
}

console.log(makeStudentReports(testData));

//summer school
let ourStudents = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];
function enrollInSummerSchool(students){
  let newArray = [];
  for (let i=0;i<students.length;i++){
    students[i].status = 'In Summer School';
    newArray.push(students[i]);
  }
  return newArray;
}
console.log(enrollInSummerSchool(ourStudents));


//Find by id

//const data = [{ id: 1, foo: 'bar' }, { id: 2, foo: 'bizz' }];
//findById(data, 2) // should return {id: 2, foo: 'bizz'}

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  // your code here
  for (let i = 0; i < items.length; i++){
    if (items[i].id === idNum) {
      return items[i];
    } 
  }
}

console.log(findById(scratchData, 28));

//validate keys

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const objectC = {
  id: 9,
  name: 'Billy Bear',
  age: 62,
  city: 'Milwaukee',
  status: 'paused',
};

const objectD = {
  foo: 2,
  bar: 'Jane Doe',
  bizz: 34,
  bang: 'Chicago',
};
const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  //check for number of keys must be ===4
  if (Object.keys(object).length!==expectedKeys.length){
    return false;
  }
  for (let i=0;i<Object.keys(object).length;i++){
    if (!expectedKeys.includes(Object.keys(object)[i]))
    {
      return false;
      
    }
    
  }
  return true;
}

console.log(validateKeys(objectA, expectedKeys));
console.log(validateKeys(objectB, expectedKeys));
console.log(validateKeys(objectC, expectedKeys));
console.log(validateKeys(objectD, expectedKeys));


//Object initializers and methods

//Create an object called loaf with flour and water properties
let loaf = {
  flour: 300,
  water: 210,
};

//Use console.log to print the flour and water properties
console.log(loaf.flour);
console.log(loaf.water);

// Fill in the body of the method to return the hydration of the loaf(the water divided by the flour multiplied by 100).
loaf.hydration = function(){
  return (this.water / this.flour) * 100;
};
// Call the hydration method and use console.log to print the result.
console.log(loaf.hydration());


// Iterating over an object's properties

// Create an object with five properties: foo, bar, fum, quux, and spam.Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

let myObj = {
  foo: 'anything',
  bar: 'anybody',
  fum: 2,
  quux: false,
  spam: 'somebody'
};

for (let key in myObj) {
  console.log(`${key} -- ${myObj[key]}`);
}

//Arrays in objects
// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

const foodObj = {
  meals:['breakfast',
    'second breakfast', 
    'elevenses', 
    'lunch', 
    'afternoon tea', 
    'dinner', 
    'supper'],
};

console.log(foodObj.meals[3]);

// Arrays of objects
// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.

let obj1={
  name:'Bob',
  jobTitle: 'Teacher'
};
let obj2={
  name:'Anne',
  jobTitle: 'Chef'
};
let obj3={
  name:'Sandra',
  jobTitle: 'Dermatologist'
};
// Store these objects in an array.
let workers = [obj1,obj2,obj3];
// Iterate over the array and use console.log to show each person's job title and name
function titles(arr){
  for(let i=0;i<arr.length;i++){
    console.log(`${arr[i].name}: ${arr[i].jobTitle}`);
  }
}
console.log(titles(workers));


//Properties that aren't there

//   Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

obj1.boss = 'Sandra';
obj2.boss = 'Sandra';

// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.".For example: Junior Engineer Bob reports to Fred..
function printBoss(arr){
  for (let i = 0; i < arr.length; i++) {
    if ('boss' in arr[i]) {
      console.log(`${arr[i].jobTitle} ${arr[i].name} reports to  ${arr[i].boss}`);
    } 
    // Expand on the previous example by adding a boss property to everyone except the owner of the company.
    else {
      console.log(`${arr[i].jobTitle} ${arr[i].name} doesn't report to anybody`);
    }
  }
}

console.log(printBoss(workers));


//Cracking the code


// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher.Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

//cycle
function decode(word) {
  //take the first char
  let firstChar = word[0];
  if (firstChar in cipher) {
    return word[cipher[firstChar]];
  }
  return ' ';
}

function decodeWords (str) {
  let arr = str.split(' ');
  return arr.map(decode).join('');
}

console.log(decode('cycle'));
console.log(decodeWords('craft block argon meter bells brown croon droop'));