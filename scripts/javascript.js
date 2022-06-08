// --------------------------------------------------
// Create Grid Button
// --------------------------------------------------
let createGridBtn = document.getElementById("createGridBtn");
createGridBtn.addEventListener("click", getGridSize);

// --------------------------------------------------
// Button: Choose color
// --------------------------------------------------
let colorBox = document.getElementById("colorBox");
currentColor = colorBox.value; // Black as default color

colorBox.addEventListener("change", chooseColor);
function chooseColor(){
  currentColor = colorBox.value;
}

// --------------------------------------------------
// Button: Eraser
// --------------------------------------------------

let eraserBtn = document.getElementById("eraserBtn");
eraserBtn.addEventListener("click", clickEraser);

function clickEraser(){
  currentColor = "#FFFFFF";
}

// --------------------------------------------------
// Button: Pencil
// --------------------------------------------------

let pencilBtn = document.getElementById("pencilBtn");
pencilBtn.addEventListener("click", clickPencil);

function clickPencil(){
  currentColor = colorBox.value;
}

// --------------------------------------------------
// Toggle: Gridlines (ie, border around grid squares)
// --------------------------------------------------
let gridlinesOn = false;

function toggleGridlines(){
  let gridRows = document.getElementsByClassName('rowDiv')

  for(r=0; r<gridRows.length; r++){
    let gridSquares = gridRows[r].childNodes;

    for(s=0; s<gridSquares.length; s++){
      if(gridlinesOn == false){
        gridSquares[s].style.border = "1px solid lightgray";
      } else if(gridlinesOn == true){
        gridSquares[s].style.border = "";
      }
    }
  }

  gridlinesOn = !gridlinesOn;
}

let toggleGridBtn = document.getElementById("toggleGridlinesBtn");
toggleGridBtn.addEventListener("click",toggleGridlines);

// --------------------------------------------------
// Button: Erase all
// --------------------------------------------------
function eraseAll(){
  let gridRows = document.getElementsByClassName('rowDiv')
  
  for(r=0; r<gridRows.length; r++){
    let gridSquares = gridRows[r].childNodes;
    for(s=0; s<gridSquares.length; s++){
      gridSquares[s].style.backgroundColor = "";
    }
  }
}

let eraseAllBtn = document.getElementById("eraseAllBtn");
eraseAllBtn.addEventListener("click",eraseAll);

// --------------------------------------------------
// Toggle: drawing mode (boolean; currently SHIFT (keyCode 16))
// --------------------------------------------------
let allowDrawing = true;
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
  if (evt.keyCode == "16") {
    allowDrawing = !allowDrawing;
  }
}

// --------------------------------------------------
// Create outline for grid (currently 85vh x 85vh)
// --------------------------------------------------
const gridDiv = document.createElement('div');
gridDiv.classList.add("gridDiv");
document.body.appendChild(gridDiv);

// --------------------------------------------------
// Remove Current Grid
// --------------------------------------------------
function removeGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createGrid(squaresPerSide){
  for(row=1; row<=squaresPerSide; row++){
    // Create rows
    const rowDiv = document.createElement('div');
    rowDiv.classList.add("rowDiv");
    rowDiv.setAttribute("id", "row-" + row);
    gridDiv.appendChild(rowDiv);

    // Within each row, create n columns
    for(col=1; col<=squaresPerSide; col++){
      const normalDiv = document.createElement('div');
      document.getElementById("row-" + row).appendChild(normalDiv);
    }
  }
}

function createMouseEvents(squaresPerSide){
  for(row=1; row<=squaresPerSide; row++){
    let temp = document.getElementById("row-" + row).childNodes;
    temp.forEach(beginDrawing);
  }
}

// --------------------------------------------------
// Function to allow drawing on [mouseenter] of a square
// --------------------------------------------------
function beginDrawing(square){
  square.addEventListener("mouseenter", function(evt){
    if(allowDrawing){
      evt.target.style.backgroundColor=currentColor;
    };
  });

  // square.addEventListener("mouseleave", function(evt){
  //   evt.target.style.backgroundColor="";
  // });
}

// --------------------------------------------------
// Prompt user for grid size
// --------------------------------------------------
function getGridSize(){
  // let squaresPerSide = parseInt(prompt("Enter number of squares per side (2 <= n <= 100)"));
  let squaresPerSide = prompt("Enter number of squares per side (2 <= n <= 100)");

  // Check for valid input
  if(squaresPerSide === null){
    return;
  }
  else if(isNaN(squaresPerSide) || (squaresPerSide < 2) || (squaresPerSide > 100)){
    alert("Please enter a number between 2 and 100");
    return;
  } else {
    // Erase old grid; draw new grid; populate [mouseenter] and [mouseleave] events
    removeGrid(gridDiv);
    createGrid(Math.floor(squaresPerSide));
    createMouseEvents(squaresPerSide);

    // Reset Global vars
    gridlinesOn = false;
    allowDrawing = true;
    colorBox.value = "#000000";
    currentColor = "#000000";
  }
}


