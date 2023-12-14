//======== asking for username who is visiting the website ============================================
// var startingNote = prompt("Enter your name to visit our website")
// if(startingNote === null || startingNote === ""){
//     startingNote = "Visitor"
// }
// else{
// document.getElementById("userName").innerHTML= ("Good Day! <strong>" + startingNote + "</strong>")
// }
//====================================(end of starting note)===========================================


//====================================(chapter 1-7  coding for index.html)===================================

document.getElementById("alertString").onclick = function(){

   document.getElementById("statement").innerHTML = "<b>Shahzad</b>"


}
document.getElementById("alertNumber").onclick = function(){

    document.getElementById("statement").innerHTML = "<b>123</b>"
 
 
 }
 document.getElementById("variableName").onclick = function(){

    document.getElementById("statement").innerHTML = "<ul> <li> there are 5 types of variable</li><li>boolein</li><li>string</li></ul>"
 
 
 }
 document.getElementById("camelCaseExamples").onclick = function(){

    document.getElementById("statement").innerHTML = "shahzadKhan, myString and yourKadu"
 
 
 }
 document.getElementById("sum2Numbers").onclick = function(){
    let x =2;
    let y=3;
    let sum =x+y;
    document.getElementById("output").innerHTML = sum

    document.getElementById("statement").innerHTML = "<h1 class='text-center' >" +"let x =" + x +"; </br> let y =" + y +"; </br> let sum = x+y;"
 
 
 }
 document.getElementById("subtract2Numbers").onclick = function(){

    let x = 2;
    let y = 2;
    let sub= x-y;
    document.getElementById("output").innerHTML = sub
    document.getElementById("statement").innerHTML = "let x = "+ x + "; <br> let y =" + y +"; <br> let sub = x-y;"
 
 
 }
 document.getElementById("multiplyNumbers").onclick = function(){
   let x= 2;
   let y= 3;
   let mul =x*y;
   document.getElementById("output").innerHTML = mul
   document.getElementById("statement").innerHTML = "let x = "+ x + "; <br> let y =" + y +"; <br> let sub = x*y;"
 

 }
 document.getElementById("divide2Numbers").onclick = function(){
   let x= 100;
   let y= 2;
   let div =x/y;
   document.getElementById("output").innerHTML = div
   document.getElementById("statement").innerHTML = "let x = "+ x + "; <br> let y =" + y +"; <br> let sub = x/y;"
 

 }
 document.getElementById("calculateSomeNumbers").onclick = function(){
   let x= 100;
   let y= 2;
   let div =x%y;
   document.getElementById("output").innerHTML = div
   document.getElementById("statement").innerHTML = "let x = "+ x + "; <br> let y =" + y +"; <br> let sub = x%y;"
 

 }

//============================(end of chapter 1-7)=============================================================

