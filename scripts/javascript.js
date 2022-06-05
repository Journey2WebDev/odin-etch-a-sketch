// n => number of squares per row or column ( 2 <= n <= 100 )
let n = 8;

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

// Mouse event function
function mouseEvent(square){
  square.addEventListener("mouseenter", function(event){
    event.target.style.backgroundColor="orange";
  });

  square.addEventListener("mouseleave", function(event){
    event.target.style.backgroundColor="";
  });
}

// Iterate over grid to add [mouseenter] and [mouseleave] events
for(row=1; row<=n; row++){
  let temp = document.getElementById("row-" + row).childNodes;
  temp.forEach(mouseEvent);
}






