const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let openDoor1, openDoor2, openDoor3;
let numClosedDoors = 3;
let randomChoreDoorGenerator = () =>{
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
  doorImage1.src = botDoorPath;
}; 

doorImage2.onclick = () =>{
  doorImage2.src = beachDoorPath;
};
doorImage3.onclick = () =>{
  doorImage3.src = spaceDoorPath;
};


