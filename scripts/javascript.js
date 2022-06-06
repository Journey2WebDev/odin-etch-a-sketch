
// Update Grid Button
let updateGridBtn = document.getElementById("updateGridBtn");
updateGridBtn.addEventListener("click",getGridSize)

// Toggle drawing mode (boolean; currently SHIFT (keyCode 16))
let allowDrawing = true;
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
  if (evt.keyCode == "16") {
    allowDrawing = !allowDrawing;
  }
}

// Create outline for grid (currently 90vh x 90vh)
const gridDiv = document.createElement('div');
gridDiv.classList.add("gridDiv");
document.body.appendChild(gridDiv);

// Clear the Grid
function clearGrid(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

// Prompt user for grid size
function getGridSize(){
  let squaresPerSide = parseInt(prompt("Enter number of squares per side (2 <= n <= 100)"));
  // Check for valid input
  if(isNaN(squaresPerSide) || (squaresPerSide < 2) || (squaresPerSide > 100)){
    alert("Please enter a number between 2 and 100");
    return;
  } else {
    // return Math.floor(squaresPerSide);
    clearGrid(gridDiv);
    createGrid(Math.floor(squaresPerSide));
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



// [mouseenter] and [mouseleave] event for grid squares
function beginDrawing(square){
  square.addEventListener("mouseenter", function(evt){
    if(allowDrawing){
      evt.target.style.backgroundColor="orange";
    };
  });

  square.addEventListener("mouseleave", function(evt){
    evt.target.style.backgroundColor="";
  });
}

// Iterate over grid to add [mouseenter] and [mouseleave] events
// for(row=1; row<=n; row++){
//   let temp = document.getElementById("row-" + row).childNodes;
//   temp.forEach(beginDrawing);
// }




