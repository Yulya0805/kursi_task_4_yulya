var container= document.getElementById("container");


var blockMove =
      `<div id="blockMove">
            <button onclick="moveLeft()">Left</button>
            <button onclick="moveRight()">Right</button>
            <button onclick="moveUp()">Up</button>
            <button onclick="moveDown()">Down</button>
      </div>`;

container.innerHTML += blockMove;


function moveRight() {
      var elem = document.getElementById("blockMove");   
      var pos = 0;
      var id = setInterval(frame, 10);
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
  var elem = document.getElementById("blockMove");   
  var pos = 0;
  var id = setInterval(frame, 10);
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
      var elem = document.getElementById("blockMove");   
      var pos = 0;
      var id = setInterval(frame, 10);
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
      var elem = document.getElementById("blockMove");   
      var pos = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (pos == 230) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.top = `${pos}px`; 
        }
      }
}















