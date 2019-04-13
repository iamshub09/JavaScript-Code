
const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}
console.log(lifePhase(5)) 




//Use of Switch Case:-
/*
function lifePhase(age){
    switch(true)
      {
        case (age<=3): 
        console.log("baby");
        break;
          
        case (age<=12):
        console.log("child");
        break;
          
        case (age<=19):
        console.log("teen");
        break;
          
        case (age<=64):
        console.log("adult");
        break;
          
        case (age<=140): 
        console.log("senior citizen");
        break;
        
        default:
        console.log('This is not a valid age');                 
        break;
      }  }
  
  lifePhase(22);

*/