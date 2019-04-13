let raceNumber = Math.floor(Math.random() * 1000);

let early=true;

let age=23;

if((age>=18) && (early))
  {
    raceNumber+=1000;
    
  }

if((age>=18) && (early))
  {
    console.log("hey will race at 9:30 am: " +raceNumber);
  }
else if((age>=18) && (!early))
  {
    console.log("runner is over 18 AND did not register early they will race at 11:00am: " +raceNumber);
  }
else if(age<18)
  {
    console.log("runner is under 18 AND did not register early they will race at 12:30am: " +raceNumber);
    
  }
else 
 {
   console.log(" the runner to see the registration desk");
 }