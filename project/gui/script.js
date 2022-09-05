// Make the DIV element draggable:


dragElement(document.getElementById("mydiv"));
let maxbuttonvalue = false;

//StartUp Button location
var offsets = document.getElementById('startUpButton').getBoundingClientRect();
var x = offsets.x;
var y = offsets.y;
console.log(x)
console.log(y)


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function openButton(){
  var x = document.getElementById("mydiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


const minButton = document.getElementById('min')
console.log(minButton)

minButton.addEventListener('click',() => {
  closeTransition()
})

const maxButton = document.getElementById('max')
console.log(maxButton)

maxButton.addEventListener('click',() => {
  var x = document.getElementById('mydiv')
  if (maxbuttonvalue === false){
    maxbuttonvalue = true
    console.log(maxbuttonvalue)
    x.style.top = "0";
    x.style.left = "0";
    // x.style.WebkitTransition = 'width .25s, height .25s';
    x.style.width = "100%"; 
    x.style.height = "100%";
  //   x.addEventListener('transitionend',() => {
  //     console.log('end of transistion')
  //     x.style.WebkitTransition = '';
  // })
    
  }else{
    maxbuttonvalue = false
    console.log(maxbuttonvalue)
    // x.style.WebkitTransition = 'width .25s, height .25s';
    x.style.width = "300px";
    x.style.height = "300px";
    x.style.top = "25%";
    x.style.left = "25%";    
    // x.addEventListener('transitionend',() => {
    //    x.style.WebkitTransition = '';
    //  })
    
  }
})

const closeButton = document.getElementById('close')
console.log(closeButton)

closeButton.addEventListener('click',() => {
  var x = document.getElementById('mydiv')
    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    // maxbuttonvalue = false
    // x.style.display = "none";
    // x.style.width = "300px";
    // x.style.height = "300px";
    closeTransition()
  }
})

function closeTransition (){
    var x = document.getElementById("mydiv");
    maxbuttonvalue = false  
    x.style.WebkitTransition = 'width .25s, height .25s , top .25s , left .25s' ;
    x.style.width = "205px"; 
    x.style.height = "75px";
    x.style.top = "25%";
    x.style.left = "25%";
  
  x.addEventListener('transitionend',() => {
    console.log('end of transistion')
    x.style.visibility = "hidden";
    x.style.WebkitTransition = '';
    x.style.width = "300px";
    x.style.height = "300px";
    x.style.display = "none"
    x.style.visibility = "visible"
  })
}
