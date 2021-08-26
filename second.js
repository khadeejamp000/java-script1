
var arr=[8,4,5,6];
var first = arr[0];
let n=5
document.write(first);

function test_prime(first)
{

  if (first===1)
  {
    return document.write("is not prime");

}
  else if(first === 2)
  {
    return document.write("is prime");

}else
  {
    for(var x = 2; x < first; x++)
    {
      if(first % x === 0)
      {
        return document.write("is not prime");

    }
    }
    return document.write("is prime");
    ;  
  }
}
console.log(test_prime(first));
document.write("<br>");
document.write("<br>");


var arr1 = [3, 1, 1, 1, 2, 3, 1, 3, 1, 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }

  m = 0;
}
document.write(item + "is most frequent item")

alert(item + " ( " + mf + " times ) ");
document.write("<br>");

document.write("<br>");

var str = prompt("enter the string");
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
document.write(result.join(''));
document.write("<br>");

const num11 = parseInt(prompt('Enter the number ')); 
  for( var i=0;1<16;i++)
  {
    if(num11%2===0)
    {
      document.write("even")
    }
    else
    {
      document.write("odd")

    }
    break;
  }
  document.write("<br>");

  var length = 3;
var myString = prompt("enter your string");
var myTruncatedString = myString.substring(0,length);
document.write(myTruncatedString)

document.write("<br>");

const numb6 = parseInt(prompt('Enter the number ')); 
const numb7 = parseInt(prompt('Enter the number ')); 
if(numb6>numb7){
  document.write(numb6+" is largest");
}
else{
  document.write(numb7+" is largest");

}
document.write("<br>");
document.write("<br>");



const string = prompt('Enter a array: ');

const words = string.split(' ');

  const z=words.sort();

document.write( "the sorted words are :"+ z)
// console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}
document.write("<br>");
document.write("<br>");
var str="javascript";
for( var i=0;i<=9;i++)
{
    for(var j=0;j<i;j++)
    {
        document.write( "&nbsp &nbsp"+str[j]);
    }
    document.write("&nbsp &nbsp\n");
    document.write("<br>");

    }
    document.write("<br>");
    document.write("<br>");

document.write("<br>");
var input=parseInt(prompt)
function sum_sq(array) {
  var sum = 0, 
      i = array.length;
  while (i--) 
   sum += Math.pow(array[i], 2);
  return sum;
}
 
 document.write(sum_sq([0,1,2,3,4])); 

