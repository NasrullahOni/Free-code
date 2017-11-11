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


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var empty =[];
  for(var i=0; i<arr.length; i+=size){
  empty.push(arr.slice(i, i+size)) ; 
  
  }
  
  return empty;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


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


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor 
  var ser = str.split(" ");
  if (ser.length ==1){
  for(var i=0; i<ser[0].length; i++){
    
    return ser[0][ser[0].length-1] === target
  }
  }
 else{
   if (ser.length >1){
    var ret =  ser[ser.length-1].includes("target")
   
     return ret;   
   }
  
   
 }  

}

confirmEnding("the man book", "book");



function repeatStringNumTimes(str, num) {
  // repeat after me
  var red = "";
  if (num >=1){
   var kay  = str.repeat(num);
  red = kay;
  }
  else{
    red ="";
  }
return red;  
}

repeatStringNumTimes("abc", 3);



function truncateString(str, num) {
  // Clear out that junk in your trunk
  var dot = "...";
  var maxi = num;
  if(maxi <=3){
    return str.slice(0,maxi)+ dot;
  }
  else
  {
   if(maxi < str.length){
    return str.slice(0,maxi-3)+ dot;
  }
  }
return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


function mutation(arr) {
 var ser = arr[0].toLowerCase();
  var wer = arr[1].toLowerCase();
  for(var i =0; i<wer.length; i++){
  if(ser.indexOf(wer[i])=== -1){
    return false;
  }
  }
return true;
}

mutation(["hello", "hey"]);




function bouncer(arr) {
  // Don't show a false ID to this bouncer.
 
  var des = arr.filter(Boolean);
  return des;
    
  
}

bouncer([7, "ate", "", false, 9]);



function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments).slice(1);
  var ret = arr.filter(function(lop){
    return !args.includes(lop);
  });
  
  return ret;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3,4);







function getIndexToIns(arr, num) {
  // Find my place in this sorted array..
  var index = 0;
  if(arr.includes(num) == false){
    arr.push(num);
    var pet =arr.sort(function(a,b){
      return a-b;
    });
   index = pet .indexOf(num);
  }
 else{
   var et =arr.sort(function(a,b){
     return a-b;
   });
   index =et.indexOf(num);
 }
return index;
}

getIndexToIns([40, 60], 50);

OR

function getIndexToIns(arr, num) {
  // Find my place in this sorted array..
  arr.push(num)
  arr.sort(function(a,b){
    return a-b
  })

return arr.indexOf(num)  
}

getIndexToIns([2, 20, 10], 19);




function rot13(str){
var wepo =[];
var dew =[];
var evd = "";
for(var i=0; i< str.length; i++){
  dew.push(str.charCodeAt(i));
  
}
for(var j=0; j<dew.length; j++){
  if(dew[j]>=65 && dew[j] <=77  ){
    dew[j]+=13;
  }
  else{
    if(dew[j]>77)
    dew[j]-=13;
  }
 wepo.push(dew[j]); 
}

for(var k=0; k<dew.length;k++){
  evd += String.fromCharCode(dew[k]); 
  
}
return evd;
}
rot13("SERR YBIR!");
