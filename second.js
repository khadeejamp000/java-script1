
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
