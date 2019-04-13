let result;
function tipCalculator(quality,total){
  if(quality==='bad')
    {
      result=total*5/100;
      return result;
    }
  
 else if(quality==='ok')
    {
      result=total*15/100;
      return result;
    }
  
   else if(quality==='good')
    {
      result=total*20/100;
      return result;
    }
  
     else if(quality==='excellent')
    {
      result=total*30/100;
      return result;
    }
  else{
  result=total*18/100;
      return result; 
  }
}

const show=tipCalculator('loda',100);
console.log(show);