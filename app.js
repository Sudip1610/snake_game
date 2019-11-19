//const canvas=document.getElementById('canvas');
function setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    let c = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    c.scale(dpr, dpr);
    return c;
  }
const c=setupCanvas(document.getElementById('canvas'));

//Text at the start of the game
c.font="800 90px Courier New";
c.textAlign = "center";
c.fillText("Start",250,250);
