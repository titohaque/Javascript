function previousnumbers() {
var x=prompt('please enter even numbers');
x=parseInt(x);
for(var i=20;i<=24;i++){
 x=x-2;

console.log(x);}
}

/*
function nexteven() {
var x=prompt('please enter even numbers');
x=parseInt(x);
for(var i=20;i<=24;i++){
 x=x+2;

console.log(x);}
}



function sum() {
var i;
var sum=0;
for(i=12;i<=33;i++){
sum=sum +i;
console.log(i);
}
{
console.log(sum);}
}

function odd() {
var i;

for(i=1;i<=30;i=i+2){

console.log(i);
}
}

function even() {
var i;

for(i=2;i<=30;i=i+2){

console.log(i);
}
}


function printnumbers() {
var x=prompt('please enter even numbers');
x=parseInt(x);
for(i=0;i<=10;i++){


console.log(x);
x=x+1;}

}


function three(){
var x= prompt("please enter numbers");
x =parseInt(x);

if (x==123){

alert("one Two Three");
}


else{
alert("Nothing ");
}

}



function ten(){
var x= prompt("please enter numbers");
x =parseInt(x);

if (x==1){
alert(1);
}

else if (x==2){
alert('2');
}

else{
alert("Nothing ");
}
}


function nextodd() {
var x=prompt('please enter numbers');
x=parseInt(x);
for(i=20;i<=24;i++)
if (x%2==0)
{x=x+1;
console.log(x);}
else 
{x=x+2;
console.log(x);}
}

function nexteven2() {
var x=prompt('please enter numbers');
x=parseInt(x);
for(i=20;i<=24;i++)
if (x%2==0)
{x=x+2;
console.log(x);}
else 
{x=x+1;
console.log(x);}
}


function previoussum() {
var x=prompt('please enter numbers');
x=parseInt(x);

for(i=10;i>=1;i++)

if (x%2==0)
{
x=x-1;
sum=sum+1;
console.log(sum);
}
else 
{x=x-2;
console.log(x);}
{sum=sum+2;

console.log(sum);
}

}

function amber(){
var i;
for(i=1;i<=20;i++)

if (i%15==0)
{

console.log('Amber Crombie');
}

else if (i%3==0){
console.log('Amber');
}


else if (i%5==0){
console.log('Crombie');
}
else{
console.log(i);}
}




function previousthree(){
var x=prompt("Please enter numbers");
x=parseInt(x);
var sum=0;

for(var i=1;i<=3;i++){
if (x%2==0){
x=x-2;

console.log(x);}
else {
x=x-1;
console.log(x);}
sum=sum+x;

}
console.log(sum);
}

function mycars(){
var mycars=["Q1",'Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10',];
for(var i=0;i<=mycars.length-1;i++)
{console.log(mycars[i]);}

}


function displayquotes(){
var mycars=["Q1",'Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10',];
for(var i=3;i<=mycars.length-1;i++)
{console.log(mycars[i]);}

}

function count2(){
var x=prompt("please enter numbers");
x=parseInt(x);

var n=["three",'four','five','six','seven'];

for(var i=123;i<=127;i++)

if (x==i)
alert(' One Two ' + n[i-123]);
}



 /*7. Assume that you are developing an ATM machine, Prompt the user to enter amount he/she wants to withdraw. 
 a. Alert “Your amount is ready” if they enter a multiple of 20 else alert “Please enter multiples of 20”
 b. Additionally, check if the user entered number of a string. If he did not enter a number then alert – Please enter valid number. 
  Hint: Use isNaN() method provided by Javascript.*/


function ATM(){
var amount =prompt("please enter amount");
amount =parseInt(amount);
if (amount%20==0)
{alert("Your amount is ready");}
else if (isNaN(amount))
{alert("please enter valid number");}
else if(amount=="Enam")
{alert("This is your name");}
else
{alert("please enter multiple of 20");}
}

/*10. If I enter a number between 1 to 10, it should alert, the number is between ‘1 and 10’
If I enter a number between 11 to 20, it should alert, the number is between ‘11 and 20’
If I enter a number between 21 to 30, it should alert, the number is between ‘21 and 30’
If I enter a number between 31 to 40, it should alert, the number is between ‘31 and 40’
If I enter a number between 41 to 50, it should alert, the number is between ‘41 and 50’*/

function oneten(){
var x=prompt("please enter numbers");
x=parseInt(x);
for(var i=1;i<=50;i=i+9)
{
if(x>=i && x<=i+9);}
var p=i+9;
{alert("The number is between " + i +" and " + p);}
}

function displayQ(){
var x=[11,22,43,4,5,6,7,8,9,10];
for(var i=0;i<x.length;i++)
{console.log(x[i]);}
}

function match(){
var a=['a','b','c','d','e','a','c'];
for(var i=0;i<a.length;i++)
{
for(var j=0;j<a.length;j++){
if(a[i]==a[j]&& i!=j){
alert("There is match bet" + i + "and" + j);
}
}
}
}



function add2(){
var x=5;
var y=6;
var z = "10";
alert (x+y+z);

}

/*7. Ask for a prompt, if I enter ‘Monday’, in console display-  Tuesday’,’Wednesday’,’Thursday’,’Friday’and ‘Saturday.
If I enter ‘Tuesday’,in console display ’Wednesday’,’Thursday’,’Friday’and ‘Saturday’.
If I enter ‘Wednesday’,in console display ’Thursday’,’Friday’and ‘Saturday’.
If I enter ‘Thursday’ , in console- ‘Friday’and ‘Saturday’.
If I enter ‘Friday’, in console- ‘Saturday’.	
If I enter ‘Saturday,in console –‘Sunday’.
If I enter ‘Sunday’, in console- it is the last day of the week.*/

function weeks(){
var x=prompt("Please enter the day");

var week=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
for(var i=0;i<week.length;i++){
if(x==week[i]){
for(var j=i+1;j<week.length;j++){

console.log(week[j]);

}

}

	
}

}


/*10. Create two arrays, for every match between the 2 arrays, display an alert ‘there is a match’.*/

function twoarrays(){
var x=[1,2,3,4,5,6];
var y=[2,4,5,6,7,8];
for(var i=0;i<=x.length;i++){
for(var j=0;j<=y.length;j++){
if (x[i]==y[j]&& i!=j)
{alert("there is a match " + i + "" +j);}
}
}
}



function car(){
var x=[];
for(var i=0;i<=100;i++){
alert("car" +[x+i]);
}

}

function car2(){
var y=[];
var x;
for(var i=1;i<=10;i++){
x="car" + i;
y[i-1]=x;
alert(y);
}
}

/*4. Write a program to return the length of a string "Pneumonoultramicroscopicsilicovolcanoconiosis". */
function length(){
var x="Pneumonoultramicroscopicsilicovolcanoconiosis";
{console.log(x.length);}

}
/*5. Write a program to convert the above string to Upper case*/


function notice(){
var x=10;
var y=5;

var k= notify(x,y);
{alert(k);}
}
function notify(y,x)
{
var z=alert(y-x);
return z;}


/*1. Here is the declaration of a function. Each parameter is a string.
function displayValue(param1, param2, param3){
	
}
Demonstrate all of the following in separate JavaScript file (each response should be in separate file):
a. How will you trigger the above method? Show at least 2 ways to call the function.
b. How many parameters will you pass to the function above?
c. Alert the parameter values inside the function.
d. What happens if you pass only 2 parameters and try to alert all 3 parameters?
e. What happens if one of the passed parameter is re-declared inside the function with a keyword var.
f. What happens if you pass only 1 parameter and try to add all 3 parameters  such as:
g. Alert(param1 + “ “+ param2+ “ “+ param3);*/



function displayvalue(x,y,z){
var x=2;
alert(x);
alert(y);
alert(z);

}

function displayvaluef(x,y,z){
alert(x);
alert(y);
alert(z);

}


function displayvaluef(x,y,z){
alert(x+y+z);

}


/*2. Here is the declaration of a function. 
function setValue(fName,lName,age){
	
}
function setCustInfo(name){
alert(“The last name is set as: ”+fname);
}
function displayCustInfo(name){
alert(“First Name is displayed as:”+lname);
}
Demonstrate all of the following in separate JavaScript file (each response should be in separate file):
a. How would show the following output in alert boxes?
i. The name is set as: Bruce
ii. Name is displayed as: Wayne

Show at least 2 ways to get the above output. (Hint: onclick and call inside js);

b. Inside this setValue method, how will you trigger setCustInfo and  displayCustInfo methods?
c. What if the variable “name”  is declared globally with a value? What will be the output look like?
d. In a separate JS file, try to declare the variable “name” locally with some value. What will be the output look like?
e. In a separate JS file, try NOT TO Pass the value to setCustInfo  from setValue function  - rather have the “name” variable globally with a value. What is the output?
*/


function setValue(fName,lName,age){
setCustInfo("md");
displayCustInfo("Enam");
	
}
function setCustInfo(fname){
alert(“The last name is set as:” + fname);
}
function displayCustInfo(lname){
alert(“First Name is displayed as:”+ lname);
}



*/





















