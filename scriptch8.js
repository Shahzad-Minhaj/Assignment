//============================(chapter 8-14 coding for chapter8.html)==========================================

document.getElementById("concatenateStrings").onclick = function(){
    let x= "Shahzad";
    let y= "minhaj";
    let concat = x+" " +y;
 
    document.getElementById("output").innerHTML = concat
    document.getElementById("statement").innerHTML = "let x = "+ x + "; <br> let y =" + y +"; <br> let concat = x+ '  ' +y;"
  
 
  }
  document.getElementById("userName").onclick = function(){
  
      let x= prompt("Please enter your name");
    console.log(x);
   
 document.getElementById("output").innerHTML = x
 document.getElementById("statement").innerHTML = 'let x =prompt("Please enter your name");'

  
 
  }
  document.getElementById("comparisonOperators").onclick = function(){
    let x= 100;
    let y= 100;
    if(x==y){
      document.getElementById("output").innerHTML = "<p> both numbers are same</p>"

    }
  
    document.getElementById("statement").innerHTML = "<p> let x = "+ x + "; <br> let y =" + y +"; <br> if("+x+"=="+y+') {<br> document.getElementById("output").innerHTML = "both numbers are same" <br> }'

 
  }
  document.getElementById("ifElseIf").onclick = function(){
    let x= 100;
    let y= 2;
    let div =x/y;
    document.getElementById("output").innerHTML = div
    document.getElementById("statement").innerHTML = "let x = "+ x + "; <br> let y =" + y +"; <br> let sub = x/y;"
  
 
  }

  document.getElementById("logIn").onclick = function(){
      let x= prompt("Enter your name");
      let y= prompt("Enter your password");
      if(x=="shahzad" && y=="123"){
        let z= alert("you are logged in as Shahzad");
        document.getElementById("output").innerHTML= "you are logged in as Shahzad"
        document.getElementById("statement").innerHTML= `let x= prompt("Enter your name");<br>
        let y= prompt("Enter your password");<br>
        if(x=="shahzad" && y=="123"){<br>
          let z= alert("you are logged in as Shahzad");<br>
          document.getElementById("output").innerHTML= "you are logged in as Shahzad"<br>
        }<br>
        else{<br>
          alert("Invalid entry")<br>
          document.getElementById("output").innerHTML= " Invalid entry"<br>
        }
        `
      }
      else{
        alert("Invalid entry")
        document.getElementById("output").innerHTML= " Invalid entry"
        document.getElementById("statement").innerHTML = `let x= prompt("Enter your name");<br>
        let y= prompt("Enter your password");<br>
        if(x=="shahzad" && y=="123"){<br>
          let z= alert("you are logged in as Shahzad");<br>
          document.getElementById("output").innerHTML= "you are logged in as Shahzad"<br>
        }<br>
        else{<br>
          alert("Invalid entry")<br>
          document.getElementById("output").innerHTML= " Invalid entry"<br>
        }
        `
      }
      
    }

  document.getElementById("clearStatementButton").onclick = function(){

    document.getElementById("statement").innerHTML = " "
 document.getElementById("output").innerHTML = " "
 
 } 