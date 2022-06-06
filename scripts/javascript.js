// n => number of squares per row or column ( 2 <= n <= 100 )
let n = 10;

// Create a div to contain all row/column divs (ie, all squares in grid)
const bodyDiv = document.createElement('div');
bodyDiv.classList.add("bodyDiv");
document.body.appendChild(bodyDiv);

for(row=1; row<=n; row++){
  // Create n rows
  const rowDiv = document.createElement('div');
  rowDiv.classList.add("rowDiv");
  rowDiv.setAttribute("id", "row-" + row);
  bodyDiv.appendChild(rowDiv);

  // Within each row, create n columns
  for(col=1; col<=n; col++){
    const normalDiv = document.createElement('div');
    document.getElementById("row-" + row).appendChild(normalDiv);
  }
}

// Toggle drawing mode (boolean; currently SHIFT)
let tempVar = false;
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
  if (evt.keyCode == "16") {
    tempVar = !tempVar;
  }
}

// [mouseenter] and [mouseleave] event for grid squares
function beginDrawing(square){
  square.addEventListener("mouseenter", function(evt){
    if(tempVar){
      evt.target.style.backgroundColor="orange";
    };
  });

  square.addEventListener("mouseleave", function(evt){
    evt.target.style.backgroundColor="";
  });
}

// Iterate over grid to add [mouseenter] and [mouseleave] events
for(row=1; row<=n; row++){
  let temp = document.getElementById("row-" + row).childNodes;
  temp.forEach(beginDrawing);
}




// Create header at top
// const headerDiv = document.createElement('div');
// headerDiv.classList.add("headerDiv");
// document.body.appendChild(headerDiv);

// let headerBtn = document.createElement('button');
// headerBtn.classList.add("headerBtn");
// headerDiv.appendChild(headerBtn);





