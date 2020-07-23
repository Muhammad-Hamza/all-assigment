{/* <chap 21-25> */}
//  var first = prompt("enter your first name");
//  var second = prompt("enter your second name");
//  alert = ("first name"+"second name");

document.write("<h4> (----string method----)<h4/>")

var str = 'My favroite mobile phone is :samsung galaxy S6 Edge plus Answer:';
document.write(`${str} ${str.length} </br>`);

var str1 = new String( "Pakistan" );
var index = str1.indexOf( "n" );
document.write("indexOf found 'n' is :" + index + "</br>)"); 

var str1 = new String( "Hello worLd" );
var index = str1.indexOf( "l" );
document.write("indexOf found 'l' is :" + index + "</br>)"); 

var str="Pakistan";  
document.writeln("Character at index 3 is :"+ str.charAt(3) + "</br>)");  

var arr=["Talha"];  
var result= arr.concat("Haroon");  
document.writeln(result+ "</br>)");  

var string = "Hyderabad";
var newstring = string.replace(/Hydera/,'Islama');
document.write(newstring+ "</br>)");

var string = "Ali and Sami are best friends. They play cricket and football together";
var newstring = string.replace(/and/g,'&',/and/gi,'&');
document.write(newstring+ "</br>)");

var string = '472';
var integer = parseInt(string, 10);
document.write("Value :"+integer+ "</br>)");

var string = 'string';
var integer = parseInt(string, 10);
document.write("Type :"+integer+ "</br>)");

var string = '472';
var integer = parseInt(string, 10);
document.write("Value :"+integer+ "</br>)");



var string = 'Number';
var integer = parseInt(string, 10);
document.write("Type :"+integer+ "</br>)");


var dryf = 'peanuts';
document.write("user input:peanuts"+ "</br>)")
document.writeln("uppercase :"+dryf.toUpperCase()+ "</br>)"); 


var dryf = 'Javascript';
document.write("user input:javascript"+ "</br>)")
document.writeln("uppercase :"+dryf.toLowerCase()+ "</br>)"); 
document.write("Number : 35.36"+ "</br>)");

var str = '35.36';
var regex = /[.,\s]/g;
var result = str.replace(regex, '');

document.write(  "Result :" + result+ "</br>)");

// var username = prompt("Enter your user name");
// if(username="special character")
// alert("please enter valid username");

// var bakery =  prompt("Welcome to abc bakery.what do you want to order sir/ma'am?");
// if("cookie");
// alert("Cookie is available at index 2 in our bakery")
// var bakery =  prompt("Welcome to abc bakery.what do you want to order sir/ma'am?");
// if("pastry");
// alert("We are sorry.pastry is not available in our bakery")


// var password = prompt("Enter your password");
// if("number");
// alert("password can not begin with a number please enter a valid password")


var str = 'University of Karachi'
    var array = str.split(" "); 
    document.write(array+ "</br>)");   

    var str="Pakistan";  
    document.write("User input : Pakistan"+ "</br>)");
    document.writeln("last Character of input is :"+ str.charAt(7) + "</br>)");  

    var temp = " “the quick brown fox jumps over the lazy dog”";
    var count = (temp.match(/the/g) || []).length;
    console.log( "There are two accurance word of 'the'" +count);



    // <chap26-30></chap26-30>
 

   document.write("<h4> (----Math methods----)<h4/>")
    var round =Math.round(3.45214); 
    document.write("Number after rounding : " + round+ "</br>)");  

    var round =Math.floor(3.45214); 
    document.write(" floor value : " + round+ "</br>)");  

    var round =Math.ceil(3.45214); 
    document.write(" floor value : " + round+ "</br>)")

    var round =Math.round(-2.673); 
    document.write("Number after rounding : " + round+ "</br>)");  

    var round =Math.floor(-2.673); 
    document.write(" floor value : " + round+ "</br>)");  

    var round =Math.ceil(-2.673); 
    document.write(" floor value : " + round+ "</br>)")

    document.writeln( "The absolute value of -4 is" + Math.abs(-4)+"<br>");  
    document.writeln("The absolute value of 5 is" +Math.abs(5)+"<br>");  


    // var random = Math.random( 4 ); 
    // document.write("Random Dice value : " + random +"<br>");
    // var random = Math.random( 6 ); 
    // document.write("Random Dice value : " + random +"<br>");

    var random = Math.floor(Math.random() * 2) + 1   

    if(random == 1){
        document.writeln("Random Coin value TAIL");
    } else {
        document.writeln("Random Coin value HEAD"+"<br>");
    }
   var max = 100;
   var  min = 1;
var random = Math.random( 84);
document.write("1 and 100 : "+random +"<br>");


// var weight = prompt("Enter your weight in kilogram");
// if("50,50kgs,50.2kgs,50.2kilograms")
// alert("The weight of user is 58.2 kilogram")

// var num = prompt("Enter a number between 1 and 10");
// if( "6");
// alert("try Again");



{/* <chap-31-34></chap-31-34> */}


document.write("<h4> (----date methods----)<h4/>")

let date = new Date("2020-6-19");
document.write(date+"<br>");

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
document.write("The current month is " + monthNames[d.getMonth()]+"<br>");


var dayNames = ["sunday","monday", "tuesday", "wednesday", "thursday", "fri" ,"saturday"
];

var d = new Date();
document.write(" Today is " + dayNames[d.getDay()]+"<br>");


// var day = prompt("Enter saturday or sunday ")
// if ("saturday","sunday")
// alert("it's fun day")



// var day = prompt("Enter first fifteen days of a month ")
// if ("< 16")
// alert("first fifteen days of the month")
// else {
//       alert("last days of the month")
//   }

// var noon = prompt("Enter afternoon or evening")
// if ("before noon");
// alert("its pm");
 
var startTime = new Date("1970-1-1")
var endTime = new Date();
var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
var resultInMinutes = Math.round(difference / 60000);
document.write(resultInMinutes+"<br>");

var x = 6; //or whatever offset
var CurrentDate = new Date();
document.write("Current date:", CurrentDate+"<br>");
CurrentDate.setMonth(CurrentDate.getMonth() + x);
document.write("Date after " + x + " months:", CurrentDate+"<br>");


var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2020, 2, 24);
var secondDate = new Date(2020, 6, 20);

var diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
document.write( "days have passed since first ramazan" + oneDay+"<br>");


var firstDate = new Date(2015, 1, 1);
var secondDate = new Date(2015, 12, 31);
var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
var resultInMinutes = Math.round(difference / 60000);
document.write("seconds have passed beginning (2015)"+resultInMinutes+"<br>");

let dif = new Date("12/5/2018 " + "23:08:16").getHours() - 
new Date("12/5/2018 " + "22:08:16").getHours();
document.write( "current date :sat  dec 12/5/2018, 23:08:16(PKT)" +"<br>");
document.write(dif + " hour ago it was saturday dec 12/5/2018, 22:08:16 (PKT) "+"<br>");


var dob = '1991';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
document.write( "your age is :"+age+"<br>");
document.write("Your birth year is 1991"+"<br>");

document.write("<h4> (----K-Electric bill----)<h4/>")

var custumer = ("Enter custumer name : Abc customer");
document.write(custumer+"<br>");
var month = ("Month:Fedruary");
document.write(month+"<br>");
var unit = ("number of units: 410");
document.write(unit+"<br>");
var per = ("charges per units: 16");
document.write(per+"<br>");
var amount = ("net amount payable (within due date): 6560");
document.write(amount+"<br>");
var late = ("late payment surcharge : 350");
document.write(late+"<br>");
var gross = ("Gross amount payable(within due date) : 6910");
document.write(gross+"<br>");

document.write("<h4> (----Function----)<h4/>")

var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };
    document.write("(date define in function)"+curday('/')+"<br>");
    // document.write(curday('-'));

    function Person(){

    }
    
    Person.prototype.fname=function(){
      return "Samawa"
    }
    
    Person.prototype.lname=function(){
      return "Haroon"
    }
    
    Person.prototype.fullname=function(){
      return this.fname() + ' '+  this.lname()
    }
    
    var p = new Person();
    document.write("(user full name)"+p.fullname()+"<br>")

    // function first(a,b){
    //     alert(a+b)
    // }
    // first(2,3);

function calc (num1,opr,num2){
    if (opr === "+"){
        return num1 + num2
    }
    else if (opr === "-"){
        return num1 - num2

    }
    else if (opr === "*"){
        return num1 * num2

    } else{
        return "incorrect operator"
    }
}
var result= calc(5,"-",5);
var result1= calc(4,"*",6);
var result2= calc(4,"$",6);

document.write(result+"<br>");
document.write(result1+"<br>");
document.write(result2+"<br>");

function second(a,b){
 document.write("(Argument):"+a+b)
}
second (2,3);

function sum()
{
    var FirstNumber = 1;
    var SecondNumber = document.getElementById('txtSecondNumber').value;
    alert(parseInt(FirstNumber) + parseInt(SecondNumber));
}