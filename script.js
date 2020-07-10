var doorImage1 = document.getElementById('door1');

var doorImage2 = document.getElementById('door2');

var doorImage3 = document.getElementById('door3');

var startButton = document.getElementById('start');

var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

var spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

var closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

var openDoor1;

var openDoor2;

var openDoor3;

var numClosedDoors = 3;

var currentlyPlaying = true;

const isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
  }else {
    return false;
  }
};

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
  return false;
} else {
  return true;
}
};

const playDoor = (door) => {
  numClosedDoors = numClosedDoors - 1;
  if (numClosedDoors === 0){
    gameOver('win');
  }else if (isBot(door)){
    gameOver('lose');
  }
};

 const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);

  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else{ (choreDoor === 2)
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
};

door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src= openDoor1;
    playDoor(doorImage1);
}
};

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src=openDoor2;
    playDoor(doorImage2);
}
};

door3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
   doorImage3.src=openDoor3;
  playDoor(doorImage3);
}
};

startButton.onclick = () =>{
  if(currentlyPlaying === false){
    startRound();
  }
};

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  currentlyPlaying = true;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck!";
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if (status === 'win'){
    startButton.innerHTML = "You win! Play again?";
  }else{
    startButton.innerHTML = "Game Over! Play again?";
  }
  currentlyPlaying = false;
}

startRound();
