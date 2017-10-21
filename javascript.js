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






function testSize(num) {
  // Only change code below this line
  if(num<5){
    return "Tiny";
  }
  else if (num<10){
    return "Small";
  }
  else if (num<15) {
    return "Medium";
  }
  
  else if (num<20){
    return "Large";
  }
  else if (num >=20){
    return "Huge";
  }
  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(100);
