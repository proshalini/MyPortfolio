const picDiv = document.querySelector('.pic');

// Toggle visibility when hovering
picDiv.addEventListener('mouseover', function() {
  this.querySelector('.text').style.opacity = 1;
});

picDiv.addEventListener('mouseout', function() {
  this.querySelector('.text').style.opacity = 0;
});

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"

modebtn.addEventListener("click",()=>{
  if(currMode == "light"){
      currMode = "dark";
      body.classList.add("dark");
      body.classList.remove("light");
  }
  else{
      currMode = "light";
      body.classList.add("light");
      body.classList.remove("dark");
  }
  console.log(currMode)
});