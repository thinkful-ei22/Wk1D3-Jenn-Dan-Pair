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