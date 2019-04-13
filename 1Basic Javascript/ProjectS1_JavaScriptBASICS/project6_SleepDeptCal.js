function getSleepHours(day){
    switch(day){
    case 'monday':
      return 7;
      break;
      case 'tuesday':
      return 7;
        break;
      case 'wednesday':
      return 7;
      break;
      case 'thuesday':
      return 7;
      break;
      case 'friday':
     return 7;
      break;
      case 'saturday':
      return 7;
      break;
      case 'sunday':
      return 7;
      break;
    }
  }
  // Actual sleep i taken in a week
  const getActualSleepHours = () =>{ let sum=getSleepHours('monday')+getSleepHours('tuesday') +getSleepHours('wednesday') + getSleepHours('thuesday') +getSleepHours('friday') + getSleepHours('saturday') +getSleepHours('sunday');
        return sum;
  }                
  
  // ideal sleep 7 hours
  function getIdealSleepHours (){
    let idealHours=7; 
    return 7 * idealHours;
  }     
  
  function calculateSleepDebt(){
   let actualSleepHours=getActualSleepHours();
   let idealSleepHours= getIdealSleepHours();
    console.log("Actual sleep: "+ actualSleepHours);
    console.log("ideal sleep: "+ idealSleepHours);
  
    if (actualSleepHours == idealSleepHours){
       console.log("user got the perfect amount of sleep." + (idealSleepHours - actualSleepHours)  +" hours needed.");
     }
    
    else if(actualSleepHours < idealSleepHours){
        console.log("user got less amount of sleep." + (idealSleepHours - actualSleepHours) +" hours needed ");
    }  
    else if(actualSleepHours > idealSleepHours) {
    console.log("LAZYYYY" + (idealSleepHours - actualSleepHours)  +" hours sleeping ? very bad");
       }
    
  } 
  
  calculateSleepDebt();
  
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    