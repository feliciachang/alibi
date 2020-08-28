import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import BlackKosa from "./assets/black-kosa.mp3";
import tambora from "./assets/tambora.jpg";

export default function blackKosa(p) {
  let song, analyzer, img, mic, fft;
  let togglePlay = true;
  let temp = [];
  let temp2 = [];
  const matrix = [[0, 2, 0], [2, 2, 2], [0, 2, 0]];
  let size = 5;
  let matrixsize = 3;

  p.preload = () => {
    song = p.loadSound(BlackKosa);
    img = p.loadImage(tambora);
  }

  p.setup = () => {
    p.background(img);
    p.createCanvas(window.innerWidth, window.innerHeight);
    // p.background(255, 0, 0);

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();

    // Patch the input to an volume analyzer
    analyzer.setInput(song);

    song.play();

    for(let j = 0; j < 10; j++){
      temp.push(Math.floor(Math.random(100, 500)));
      temp2.push(Math.floor(Math.random(300, 700)));
    }
    for(let j = 10; j < 20; j++){
      temp.push(Math.floor(Math.random(550, 750)));
      temp2.push(Math.floor(Math.random(550, 750)));
    }
    p.background(img);
  };

  p.draw = () => {
    // //Get the average (root mean square) amplitude
    let rms = analyzer.getLevel();
    p.stroke(255, 0, 0, 50);
    p.fill(255, 204, 0, 5);
    // p.fill(127);
    // p.stroke(0);

    // // Draw an ellipse with size based on volume
    // for(let i = 0; i < window.innerWidth; i = i+100){
    //   for(let j = 0; j < window.innerHeight; j = j+100){
    p.ellipse(
      window.innerWidth / 2 - 400 ,
      window.innerHeight / 2 ,
      300,
      10 + rms * window.innerHeight
    );
    p.ellipse(
      window.innerWidth / 2 + 400,
      window.innerHeight / 2,
      300,
      10 + rms * window.innerHeight
    );

    p.stroke(0, 70, 0, 100);
    p.fill(0, 70, 0, 100);
    p.ellipse(
      window.innerWidth / 2 - 400,
      window.innerHeight / 2 ,
      10 + rms * window.innerHeight,
      10 + rms * window.innerHeight,
    )
    p.ellipse(
      window.innerWidth / 2 + 400,
      window.innerHeight / 2 ,
      10 + rms * window.innerHeight,
      10 + rms * window.innerHeight,
    )

    p.fill(0, 70, 0, 50);
    p.ellipse(
      p.mouseX,
      p.mouseY,
      10 + rms * window.innerHeight,
      10 + rms * window.innerHeight,
    )
    // p.text(
    //   "Tambora",
    //   p.mouseX/2,
    //   p.mouseY,
    // )
    // p.textSize(10 + rms)

    //   }
    // }

    // const xstart = p.constrain(p.mouseX - 80/2, 0, img.width);
    // const ystart = p.constrain(p.mouseY - 80/2, 0, img.height);
    // const xend = p.constrain(p.mouseX + 80/2, 0, img.width);
    // const yend = p.constrain(p.mouseY + 80/2, 0, img.height);
    // const matrixsize = 3;
    // img.loadPixels();
    // // for (let x = xstart; x < xend; x++) {
    // //   for (let y = ystart; y < yend; y++ ) {
    // //     let c = convolution(x, y, matrix, matrixsize, img);
        
    // //     // retrieve the RGBA values from c and update pixels()
    // //     let loc = (x + y*img.width) * 4;
    // //     p.pixels[loc] = p.red(c);
    // //     p.pixels[loc + 1] = p.green(c);
    // //     p.pixels[loc + 2] = p.blue(c);
    // //     p.pixels[loc + 3] = p.alpha(c);
    // //   }
    // // }
    // for(let i = 0; i < temp.length; i++){
    //   for (let x = p.mouseX; x < p.mouseX + 50; x++) {
    //     for (let y = p.mouseY; y < p.mouseY + 50; y++ ) {
    //       let c = convolution(x, y, matrix, matrixsize, img);
    //       let loc = (x + y* img.width)*4;
    //       img.pixels[loc] = p.red(c);
    //       img.pixels[loc+1] = p.green(c);
    //       img.pixels[loc+2] = p.blue(c);
    //       img.pixels[loc+3] = p.alpha(c);
    //     }
    //   }
    // }
    // img.updatePixels();
    // p.background(img);
  };

  const convolution = (x, y, matrix, matrixsize, img) => {
    let rtotal = 0.0;
    let gtotal = 0.0;
    let btotal = 0.0;
    let offset = matrixsize / 2;
    for (let i = 0; i < matrixsize; i++) {
      for (let j = 0; j < matrixsize; j++) {
        // What pixel are we testing
        let xloc = x + i - offset;
        let yloc = y + j - offset;
        let loc = (x + y*img.width) * 4;

        //console.log(loc, img.pixels.length);
        // Make sure we haven't walked off our image, we could do better here
        loc = p.constrain(Math.floor(loc), 0, img.pixels.length - 1);
        // Calculate the convolution
        rtotal += (img.pixels[loc]) * matrix[i][j];
        gtotal += (img.pixels[loc+1]) * matrix[i][j];
        btotal += (img.pixels[loc+2]) * matrix[i][j];
      }
    }
    rtotal /= 9;
    btotal /=9;
    gtotal /= 9;
    rtotal = p.constrain(rtotal, 0, 255);
    gtotal = p.constrain(gtotal, 0, 255);
    btotal = p.constrain(btotal, 0, 255);
    // Return the resulting color
    //print(rtotal);
    //print(gtotal);
    //print(btotal);
    return p.color(rtotal, gtotal, btotal);
  };
}
