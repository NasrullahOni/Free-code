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

function palindrome(str) {
var clean = str.replace(/[\W_]/g, "").toLowerCase();
var reverse = clean.split("").reverse().join("");
return clean === reverse;  
}



palindrome("A man, a plan, a canal. Panama");




function findLongestWord(str) {
 var sed = str.split(" ");
  var longest =0;
  for(var i =0; i<sed.length; i++){
   if(longest < sed[i].length){
     longest = sed[i].length; 
   
   }

 } 
return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
