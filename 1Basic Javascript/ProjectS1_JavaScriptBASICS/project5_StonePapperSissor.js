const getUserChoice= (userInput)=>{
    userInput.toLowerCase();
     if(userInput==='rock'||userInput==='paper'||userInput==='scissors')
       {
         return userInput;
       }
    else
    {
      console.log("invalid user input");
    }
  }
  // console.log("user input is: "+ getUserChoice('paper'));// check function work properly or not !
  
  function getComputerChoice() {
      let randomNumber=Math.floor(Math.random() * 3);
      switch (randomNumber) 
    {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
        console.log("invalid");
   }
   
  }
  // console.log("computer input is: " + getComputerChoice());
  
  
  function determineWinner(userChoice, computerChoice){
      if (userChoice === computerChoice)
  {
    return "game is tie";
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
    
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
            } 
  
  
  function playGame(){
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log("user choice: ",userChoice );
    console.log("computer choice: ",computerChoice );
  
  console.log(determineWinner(userChoice, computerChoice));
   }
  playGame();
  
  
  
  
  