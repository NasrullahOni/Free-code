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




function titleCase(str) {
var split = str.split(" ");
for(var i=0; i< split.length; i++){
  
  var element= split[i].charAt(0).toUpperCase();
  split[i] = element +  split[i].substr(1).toLowerCase() ;
  
}  
return split.join(" ");
}

titleCase("I'm a little tea pot");

function largestOfFour(arr) {
  // You can do this!
  var largest = 0;
  var qes =[];
  for(var i=0; i<arr.length; i++){
    var sum = arr[i].reduce(function(total,num){
     return Math.max(total, num)      
    })
  arr[i] = sum;
  }

return arr
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
