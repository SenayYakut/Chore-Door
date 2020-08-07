const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let openDoor1, openDoor2, openDoor3;
let numClosedDoors = 3;
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let currentlyPlaying = true;


const startButton = document.getElementById("start");

const isBot = (door) =>{
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }

}
const isClicked = (door) =>{
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
}
const playDoor = (door) => {
  numClosedDoors -= 1;
  if(numClosedDoors === 0){
    gameOver("win");
  }else if(isBot(door)){
      gameOver();
  }
}


const randomChoreDoorGenerator = () =>{
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else{
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(door1)){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}; 

doorImage2.onclick = () =>{
  if(currentlyPlaying && !isClicked(door2)){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
};

doorImage3.onclick = () =>{
  if(currentlyPlaying && !isClicked(door3)){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }   
};

startButton.onclick = () => {
  if(currentlyPlaying === false){
    startRound();
  }
}

const startRound = () =>{
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator()

}


let gameOver = (status) => {
  if(status === "win"){
    startButton.innerHTML = "You win! Play again?";
  }else{
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;

}

startRound();
