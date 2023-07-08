// Your code here
function moveDodgerLeft() {
    // Extract the current left position
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // Check that dodger is not going past the left edge of the game field
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight() {
    // Extract the current left position
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    // Check that dodger is within game field boundaries (360 is calculated as 400 - 40, where 400 is the game field width and 40 is the dodger width)
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
    