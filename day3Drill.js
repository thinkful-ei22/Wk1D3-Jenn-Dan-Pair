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