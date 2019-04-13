let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let currentlyPlaying = true;

//DOOR 1 CREATED
let doorImage1 = document.getElementById('door1');
//Now make the closed door image change when you click it so that you see an open door with the ChoreBot.
let botDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
 
doorImage1.onclick = () => {
 if(currentlyPlaying && !isClicked(doorImage1)){//PART OF GAME SECURITY
  //A variable's src value can be assigned a new value held by another variable:
  
//doorImage1.src=botDoorPath; (changes)
doorImage1.src=openDoor1; 
playDoor(doorImage1); // check if door close return win and loose condition by further checking that inside that door there isBot or not ...
    //PART OF GAME SECURITY
}}


//DOOR 2 CREATED
let doorImage2 = document.getElementById('door2');
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";


doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){//PART OF GAME SECURITY
    //doorImage2.src=beachDoorPath; (changes)
  doorImage2.src=openDoor2; 
    playDoor(doorImage2); // check if door close return win and loose condition by further checking that inside that door there isBot or not
    //PART OF GAME SECURITY
  }}

//DOOR 3 CREATED
let doorImage3 = document.getElementById('door3');
let spaceDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

doorImage3.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage3)){ //PART OF GAME SECURITY
  //doorImage3.src=spaceDoorPath; (changes)
  doorImage3.src=openDoor3; 
  playDoor(doorImage3); // check if door close return win and loose condition by further checking that inside that door there isBot or not
}
}


/*  *****Let's Make This ACT Like a Game! - Part III (Building a Loser)*****  */

//You need to check if a door has the game-ending ChoreBot.
const isBot = (door) => {
  
  if (door.src.trim() === botDoorPath.trim()) {
       return true;
  } else {
    return false;
  }
}


// Let's Make This ACT Like a Game! - Part II (Building a Winner)
// **********GAME SECURITY .... ************
let startButton= document.getElementById('start');
const gameOver = (status) => {
   if(status==='win')
     {
     startButton.innerHTML="You win! Play again?";
     }
  else
    {
      startButton.innerHTML="Game over! Play again?";
    }
  currentlyPlaying =false;

}
// checks each door clickable only once. so the player not to cheat.
const isClicked = (door) => {
  if (door.src == closedDoorPath) {
    return false;
  } else {
    return true;
  }
}
//checks door open or closed 
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  }
}

// RANDOM CHARBOT GENERATOR
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors=3;
const randomChoreDoorGenerator = () => {
 const choreDoor = Math.floor(Math.random() * numClosedDoors);
if(choreDoor === 0) {
openDoor1= botDoorPath;
openDoor2= beachDoorPath;
openDoor3= spaceDoorPath;
} 
else if (choreDoor === 1) { 
openDoor1= beachDoorPath;
openDoor2= botDoorPath;
openDoor3= spaceDoorPath
  } 
  else {(choreDoor === 2)
openDoor1= spaceDoorPath;
openDoor2= beachDoorPath;
openDoor3= botDoorPath;
  } 
 }

// RESET VALUES 
startButton.onclick = () => {
  if (!currentlyPlaying){
  startRound();
}
}
const startRound = () => {
  // Reset all the doors to be closed
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}

randomChoreDoorGenerator();
startRound();





