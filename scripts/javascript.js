// n => number of squares per row or column ( 2 <= n <= 100 )
let n = 5;

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

// Grab a square in grid
let temp = document.getElementById("row-1").firstChild;
temp.addEventListener("mouseenter", function(event){
  event.target.style.backgroundColor="orange";
  // reset the color after a short delay
  // setTimeout(function() {
  //   event.target.style.backgroundColor = "";
  // }, 250);
});

temp.addEventListener("mouseleave", function(event){
  event.target.style.backgroundColor="";
  // reset the color after a short delay
  // setTimeout(function() {
  //   event.target.style.backgroundColor = "";
  // }, 250);
});



