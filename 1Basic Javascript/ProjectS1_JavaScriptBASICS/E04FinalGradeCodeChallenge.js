//Example 1
/*
function finalGrade(a, b, c)
{
  let total=a+b+c;
  let average=total * 100 / 300;
  if(average<=59)
    {
      console.log("fail");
    }
  
else if(average<=69)
    {
      console.log("D");
    }
  
else if(average<=79)
    {
      console.log("C");
    }
  
else if(average<=89)
    {
      console.log("B");
    }
  
else if(average<=100)
    {
      console.log("A");
    }
else if(average>100)
  {
  console.log('You have entered an invalid grade.');  
  }
  else{
    console.log('HELLO ');  
  }
  
}

finalGrade(70, 70, 70);
*/

//Example 2
const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}
