import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import Elvn from "./assets/pulpy.mp3";
import tambora from "./assets/tambora.jpg";
import painting from "./assets/painting.jpg";
import photo2 from "./assets/photo2.jpg";

export default function ElvnPM(p) {
  let song, analyzer, img, mic, fft, you, pho;

  p.preload = () => {
    song = p.loadSound(Elvn);
    img = p.loadImage(tambora);
    you = p.loadImage(painting);
    pho = p.loadImage(photo2);
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
    p.background(you);
  };

  p.draw = () => {
    // //Get the average (root mean square) amplitude
    let rms = analyzer.getLevel();

    // p.image(you, Math.floor(rms * window.innerWidth), 100, 200, 500);
    // // // Draw an ellipse with size based on volume
    if (rms > 0.2) {
      for (let i = -100; i < window.innerWidth + 100; i = i + 100) {
        for (let j = -100; j < window.innerHeight + 100; j = j + 100) {
          p.image(
            rms > 0.3 ? img : pho,
            i,
            j,
            (rms * window.innerHeight) / p.random(0, 10),
            (rms * window.innerHeight) / p.random(0, 10)
          );
        }
      }
    }
    // if(p.frameCount > 4900){

    // for (let i = 0; i < 10; i++) {
    //   p.stroke(255, 0, 0, 100);
    //   p.ellipse(
    //     window.innerWidth / 2,
    //     window.innerHeight / 2,
    //     200,
    //     (rms * 10000) / 2
    //   );
    // }

    if (rms > 0.4) {
      renderTeardrop();
    }
    p.noStroke();
    p.fill(200, 100, 200, 1);
    p.rect(0, 0, window.innerWidth, window.innerHeight);
    if (rms > 0.25) {
      p.image(
        you,
        p.mouseX - 300,
        p.mouseY - 500,
        rms * window.innerWidth,
        rms * window.innerWidth
      );
    }
    // if (rms > 0.3) {
    //   renderTeardrop2();
    // }
    // }
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
  const renderTeardrop2 = () => {
    let rand = Math.random();
    let rand2 = Math.random();
    for (let i = 300; i >= 0; i = i - 3) {
      p.stroke(255, 0, 255, i);
      p.fill(255, 0, 200, 5);
      p.ellipse(
        rand * window.innerWidth,
        rand2 * window.innerHeight + i / 4,
        i / 3,
        100
      );
    }
  };
}
