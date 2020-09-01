import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import Elvn from "./assets/11pm.mp3";
import tambora from "./assets/tambora.jpg";

export default function ElvnPM2(p) {
  let song, analyzer, img, mic, fft;

  p.preload = () => {
    song = p.loadSound(Elvn);
    img = p.loadImage(tambora);
  };

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
  };

  p.draw = () => {
    // //Get the average (root mean square) amplitude
    let rms = analyzer.getLevel();
    // p.fill(127);
    // p.stroke(0);

    // // Draw an ellipse with size based on volume
    for (let i = 0; i < window.innerWidth; i = i + 100) {
      for (let j = 0; j < window.innerHeight; j = j + 100) {
        p.image(
          img,
          i,
          j,
          i / 10 - rms * window.innerHeight,
          j / 10 - rms * window.innerHeight
        );
      }
    }
    if (rms > 0.1) {
      renderTeardrop();
    }
  };

  const renderTeardrop = () => {
    let rand = Math.random();
    let rand2 = Math.random();
    for (let i = 300; i >= 0; i = i - 3) {
      p.stroke(0, 0, 255, 5);
      p.fill(0, 0, 200, 5);
      p.ellipse(
        rand * window.innerWidth,
        rand2 * window.innerHeight + i / 4,
        i / 3,
        100
      );
    }
  };
}
