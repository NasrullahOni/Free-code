// First Question
function reverseString(str) {
  var change = [];
  for(var i=0;i<str.length; i++){
    change.push(str[i]);
    
  }
  var dert = change.reverse();
  var string = dert.join("");
  
  return string;
}

reverseString("hello");


// Second question

function factorialize(num) {
  if (num ==0){
    return 1;
  }
 else{
  var factor = 1;
   for(var i =1; i<=num; i++){
    factor *=i; 
   }
   return factor;
 }
}

