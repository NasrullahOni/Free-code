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

var wer ="abcdefghijklmnopqrstuvwxyz"

var rade = "derui_potre*werpol#&&&%%%34"

for(var i =0; i<wer.length; i++){
  
for(var j=0; j< rade.length; j++){
    
if(wer[i]== rade[j] || (rade[j]== Number)){
 
     var sed = rade[j]  
    
  console.log( sed);
    }
  }
  
}

