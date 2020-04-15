// a function always adds a event listener to a div and triggle another function that creates 3 cirlces 

// inside show function it will add three circles to the big div, and each div also runs the first function

var parent = document.getElementById("parent");
addClick(parent);

function addClick(el) {
  el.addEventListener("click",
    function () {
      addCircles(el);},
    { once: true }
  );
}

function addCircles(el) {
  // create circle divs
  var circleGroup = document.createElement("div");
  var circles1 = document.createElement("div");
  var circles2 = document.createElement("div");
  var circles3 = document.createElement("div");
  var circles4 = document.createElement("div");


  // assign circles to css styles.
  addCircleCSS(el, circleGroup, "circles-container flex-container");
  addCircleCSS(circleGroup, circles1, "circles left");
  addCircleCSS(circleGroup, circles2, "circles right");
  addCircleCSS(circleGroup, circles3, "circles last");
  addCircleCSS(circleGroup, circles4, "circles fourth");


  // attach event listener in addClick function to the three newly created circles
  addClick(circles1);
  addClick(circles2);
  addClick(circles3);
  addClick(circles4);

}

function addCircleCSS(parent, circle, classname) {
  // add the appropriate css 
  circle.className = classname + "";
  // append divs to the parent so it shows up in our html document
  parent.appendChild(circle);
}