// the boy is good

/* the man is going
to be main man */

var ourName;
var myName;

var a;
var b = 2;

var a =7;
var b = a;


function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit= 9/5 *celsius +32;
  
  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);


//2
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result= "I like, " + myNoun + " the boy " + myAdjective + " leave man " + myVerb + " hred " + myAdverb;
   
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

var myList = [["buscuits",7],["bananas",5], ["candy",20],["pen",4],["pencil",9]]; // Nested arrays


function minusSeven(num) {
  return num - 7;
}



// Only change code below this line

function timesFive(elem){
  return elem * 5;
}

timesFive(32);
















var count = 0;

var report ="";

function cc(card) {
  // Only change code below this line
 switch (card){
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
     count+=1;
     report = count + " Bet";
     break;
   case 7:
   case 8:
   case 9:
     report = count + " Hold";
     break;
     
   case 10:
   case "J":
   case "Q":
   case "K":
   case "A":
     count -=1;
     report = count + " Hold" ||" Bet";
     break;
     
 }
  
  return report;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc("J"); cc(9); cc(2); cc(7);




 function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
var myObj  ={
    
    "alpha" :"Adams",
    "bravo" : "Boston",
    "charlie":"Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot": "Frank"
  };
   result = myObj[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");





// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) === true){
    return myObj[checkProp];
  } 
  else{
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");


var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true
  },
  // Add record here

{
  
  "artist":"Dele",
  "title": "The man",
  "release_year": 1984,
  "formats": ["Ds","8Y","lp"]
  
}


];

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line


var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for(var i=1; i<=9; i+=2){
  myArray.push(i);
  
}


// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i =9; i>0; i-=2){
  myArray.push(i);
  
}




var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total =0;
for(var i=0; i< myArr.length; i++){
  total+=myArr[i];
}
console.log(total);


function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr[i].length; j++){
      product*=arr[i][j];
      
    }
  console.log(product);
  
  }
  
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);



// Setup
var myArray = [];

// Only change code below this line.
var i =0;
while (i<5){
  myArray.push(i);
  i++;
}


