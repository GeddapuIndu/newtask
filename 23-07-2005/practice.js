Mydog={
    "name":"tinku",
    "legs":4,
    "tails":1,
    "friends":["chintu","jack"]

};
console.log(Mydog);

newObj={
    "nam":"indu",
    "num":5,
    "Section":"c"
};
const obj1=newObj.nam;
const obj2=newObj.num;
const obj3=newObj.Section;

console.log(obj1);
console.log(obj2);
console.log(obj3);

//object properties with bracket notation
mainObj={
    "name1":"a",
    "number":1,
    "Section":"c"
};

const val1=mainObj["name1"];
const val2=mainObj["number"];
const val3=mainObj["Section"];

console.log(val1);
console.log(val2);
console.log(val3);

//Accessing Object Properties with Variables
mainObj1={
    "dog":"chintu",
    "breed":"jerman shephard"
};
const breed1="breed";
const breed2=mainObj1[breed1];
console.log(breed2);
mainObj1.dog="tinku";
console.log(mainObj1);
mainObj1.newbreed="pomerion";
console.log(mainObj1);
const delete1=delete mainObj1.breed;
console.log(delete1);
console.log(mainObj1);



function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}



