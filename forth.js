function quadratic(){
let root1, root2;
let a = document.getElementById("id1").value;
let b = document.getElementById("id2").value;
let c = document.getElementById("id3").value;

let discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
document.getElementById("result").innerHTML=`The roots of quadratic equation are ${root1} and ${root2}`;

}
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    
    document.getElementById("result").innerHTML=`The roots of quadratic equation are ${root1} and ${root2}`;

}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    
    document.getElementById("result").innerHTML=`The roots of quadratic equation are ${realPart} and ${imagPart}`;
}
}
function positive(){
    let a = document.getElementById("id4").value;
    if(a>0)
{
    document.getElementById("result1").innerHTML=`The number is positive`;

}
else if
    (a<0)
    {
        document.getElementById("result1").innerHTML=`The number is negative`;
 
}
else{
    document.getElementById("result1").innerHTML=`The number is zero`;
 
}
}
function oddoreven(){
let a = document.getElementById("id5").value;

for( var i=0;1<16;i++)
  {
    if(a%2===0)
    {
    //   document.write("even")
    document.getElementById("result2").innerHTML=`The number is even`;

    }
    else
    {
    //   document.write("odd")
    document.getElementById("result2").innerHTML=`The number is odd`;


    }
    break;
  }
}
function largest()
{
    let a = document.getElementById("id6").value;
let b = document.getElementById("id7").value;
let c = document.getElementById("id8").value;
let largest;

if(a >= b && a >= c) {
    largest = a;
}
else if (b>= a && b >= c) {
    largest = b;
}
else {
    largest =c;

}
document.getElementById("result3").innerHTML=`The largest number is ${largest} `;
}
function prime(first)
{

  if (first===1)
  {
    document.getElementById("result4").innerHTML=`is not prime`;

}
  else if(first === 2)
  {
    document.getElementById("result4").innerHTML=`is prime`;

}else
  {
    for(var x = 2; x < first; x++)
    {
      if(first % x === 0)
      {
        document.getElementById("result4").innerHTML=`is  prime`;

    }
    }
    document.getElementById("result4").innerHTML=`is not prime`;
    
  }
}
console.log(prime( document.getElementById("id9").value));


































// function factorial()
// {
//     let a = document.getElementById("id12").value;
//         let answer = 1;
//         if (a == 0 || a == 1){
//           return answer;
//         }else{
//           for(var i = a; i >= 1; i--){
//             answer = answer * i;
//           }
//           ` document.getElementById("result6").innerHTML=`is  prime;
//           ;
//         }  
//       }




// }
function factorial()
{
  let a = document.getElementById("id12").value;


 var factorial = 1

if (a < 0)
{
 document.getElementById("result6").innerHTML=`Sorry, factorial does not exist for negative numbers`;
}
else if (a === 0)
{
document.getElementById("result6").innerHTML=`The factorial of 0 is 1`;
}
else
{
   for( var i=1;i<a;i++){
       factorial = factorial*i

document.getElementById("result6").innerHTML=`The factorial of ${a} is ${factorial}`;
}
}
}
function multiplication()
{
  // let a = document.getElementById("id13").value;
  
  // for (let i = 0; i < 10; i++)
   
    //  for( let j=1;j<10;j++){
          //  a=a*i; 
          // var result7=`${a}*${i}=${a*1}`; table
          var table = 9 ;
          var length = 10;
          var i = 1;
          // document.write("multiplication table:"+)
          for (let i = 0; i < length; i++){

          document.getElementById("result7").innerHTML="<br>"+`${i} * ${table}+= ${i*table}`;
     }
// document.getElementById("result7").innerHTML="<br>";
// document.getElementById("result7").innerHTML=`${a}*${i}=${a+1}`;

  

}
function fibonacci()
{

  // const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
let a = document.getElementById("id14").value;

// console.log('Fibonacci Series:');
document.getElementById("result8").innerHTML= `fibonacci series:`;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
}
function amstrongnumber()
{
  let sum = 0;

let number = document.getElementById("id15").value;

let temp = number;
while( temp > 0)
{
  let digit = temp % 10;
  sum += digit * digit * digit;
  temp = parseInt(temp /10);
}
if(sum == number)
{
  document.getElementById("result9").innerHTML= `${number} itis an Armstrong number:`;

}
else
{
document.getElementById("result9").innerHTML= `${number} it is  not an Armstrong number:`;
}

}
function amstrong()
{
  let a=document.getElementById("id16").value
  let b=document.getElementById("id17").value

// const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
// const highNumber = parseInt(prompt('Enter a positive high integer value: '));

document.getElementById("result10").innerHTML= ` Armstrong number:`;

// console.log ('Armstrong Numbers:');

// looping through lowNumber to highNumber
for (let i = lowNumber; i <= highNumber; i++) {

    // converting number to string 
    let numberOfDigits = i.toString().length;

    let sum = 0;

    // create a temporary variable
    let temp = i;

    /* loop through a number to find if 
    a number is an Armstrong number */
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
 
    if (sum == i) {
        console.log(i);
    }
}
}
function calculator()
{
let operator=document.getElementById("id18").value;
let number1=(document.getElementById("id19").value);
let number2=(document.getElementById("id20").value);


let result11;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

document.getElementById("result11").innerHTML=`${number1}${operator}${number2}=${result}`;
}
function sum()
{
let number=document.getElementById("id21").value;

let sum = 0;

for (let i = 1; i <= number; i++) {
    sum += i;
}
document.getElementById("result12").innerHTML=`The sum of numbers:${sum} `;
}
function same() 
{

  let number1 = (document.getElementById("id22").value);
  let number2 = (document.getElementById("id23").value);
  let number3 = (document.getElementById("id24").value);

   const x = number1 % 10;
   const y = number2 % 10;
   const z = number3 % 10;

   if(x == y && x == z)
   {
     document.getElementById("resuit13").innerHTML=`${number1},${number2}and${number3} have  same last digit`;
   }
     else{
      document.getElementById("resuit13").innerHTML=`${number1},${number2}and${number3} have different last digit`;

    }
    

}
function factors()
{
  let number = document.getElementById("id25").value;
  document.getElementById("resuit14").innerHTML=`The factors of ${number} is: `;

  for (let i = 1; i<=number; i++)
  {
      if (numb % i == 0)
      {
        console.log(document.getElementById("result17").innerHTML=`${i}`);
      }
  }

}