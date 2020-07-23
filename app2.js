// <h>chap 38-42</h> //
document.write("<h2> (----Function,Switch,While,DOWhile----)<h2/>")
document.write("(task no 2)"+"<br>")
 var x = myFunction(4, 3);
 document.getElementById("first").innerHTML = x;

function myFunction(a, b) {
  return a + b;
}

function leapyear(year){
    return (year % 100 === 0 )? (year % 400 === 0) : (year % 4 === 0);
}
document.write(leapyear(2012));
document.write("<br>");
document.write(leapyear(2016));
document.write("<br>");
document.write(leapyear(2020));
document.write("<br>");


document.write("(task no 5)"+"<br>")
var name = ['Karachi','Islamabad','LAHORE'];
a  = name.indexOf('Karachi');
document.write(a + "<br>");
document.write("(task no 6)"+"<br>")
var string = "karachi";
var vowel = ["a", "e", "i", "o", "u"];

String.prototype.character = function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
            }

        }
    }
}

string.character();
document.write(string);
document.write("<br>");

document.write("(task no 7)"+"<br>")
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
document.write(vowel_count("“Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui"));
document.write("<br>");
// (CHAP--43,48)


 function checkbox(greet) {
 alert("Hello sylani");
  
 }





 function changeImage(){
  var ikImage = document.getElementById('img');
  ikImage.src = 'pictwo.jpg'

 }
 function changeImageBefore(){
   var ikImage = document.getElementById('img');
   ikImage.src = 'picone.jpg'
 }


 function increaseValue() {
   var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
   value++;
   document.getElementById('number').value = value;
 }
 function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
   value = isNaN(value) ? 0 : value;
   value < 1 ? value = 1 : '';
   value--;
  document.getElementById('number').value = value;
 }

// (CHAP--49,52)

function ReadMore(){
var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique doloribus excepturi molestias fugit maximequos molestiae accusamus ipsa, dicta necessitatibus possimus ea atque, laudantium velit assumenda ratione placeat ex?"
var peragraf = document.getElementById('pera');
peragraf.innerHTML = text


}



function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}


var a = document.getElementById("main");
console.log(a.firstChild);

var b = document.getElementById("non");
console.log(b.nextSibling);

var child = document.getElementById("main");
console.log(child.childNodes);

var type = document.getElementById("form");
console.log(type.nodeType);

var last = document.getElementById("last-name");
console.log(last.nodeType);
console.log(last.childNodes);

var main = document.getElementById("main");
console.log(main.firstChild);
console.log(main.lastChild);

console.log(last.lastChild);
console.log(last.previousSibling);


var node = document.getElementById("email");
console.log(node.parentNode);
console.log(node.nodeType);

function showImage(e){
  var modalImage = document.getElementById('modalImage');
  modalImage.src = e.src
}

function zoomin() { 
  var GFG = document.getElementById("geeks"); 
  var currWidth = GFG.clientWidth; 
  GFG.style.width = (currWidth + 100) + "px"; 
} 
function zoomout() { 
  var GFG = document.getElementById("geeks"); 
  var currWidth = GFG.clientWidth; 
  GFG.style.width = (currWidth - 100) + "px"; 
} 