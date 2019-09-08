let container= document.getElementById("container");

let blockMove =
      `<div id="blockMove">
            <button onclick="moveLeft()">Left</button>
            <button onclick="moveRight()">Right</button>
            <button onclick="moveUp()">Up</button>
            <button onclick="moveDown()">Down</button>
      </div>`;

container.innerHTML += blockMove;
let blockMoveElem = document.getElementById("blockMove");   
let rect = blockMoveElem.getBoundingClientRect();
console.log(rect);


function moveRight() {
  setBasePosition();
  let elem = document.getElementById("blockMove");   
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 540) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = `${pos}px`;
    }
  }
}


function moveLeft() {
  setBasePosition();
  let elem = document.getElementById("blockMove");   
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (pos == -540) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.left = `${pos}px`;
    }
  }
}

function moveUp() {
  setBasePosition();
  let elem = document.getElementById("blockMove");   
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (pos == -230) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.top = `${pos}px`; 
    }
  }
}

function moveDown() {
  setBasePosition();
  let elem = document.getElementById("blockMove");   
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 230) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = `${pos}px`; 
    }
  }
}

function setBasePosition() {
  document.getElementById("blockMove").style.left = `0px`;
  document.getElementById("blockMove").style.top = `0px`;
}













