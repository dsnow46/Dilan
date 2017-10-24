import React from "react";

function Mandelbrot(){
  createcanvas(360, 240);
  pixelDensity(1);
  loadPixels();
  for(var x = 0; x < width; x++){
    for(var y = 0; y < height; y++){

      var a = map(x, 0, width, -2, 2);
      var b = map(x, 0, height, -2, 2);

      var n = 0;
      var z = 0;

      while(n < 100){
        var aa = a*a - b*b;
        var bb = 2 * a * b;

        a = aa;
        b = bb;

        if(abs(a + b) > 16){
          break;
        }
        n++;
      }

      var bright = 0;

      if(n === 100) {
        bright = 255;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = 51;
      pixels[pix + 1] = 51;
      pixels[pix + 2] = 51;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}

export default Mandelbrot;
