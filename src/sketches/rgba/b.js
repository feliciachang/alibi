import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import Elvn from "../assets/11pm.mp3";
import BK from "../assets/black-kosa.mp3";
import tambora from "../assets/tambora.jpg";
import painting from "../assets/painting.jpg";
import photo2 from "../assets/photo2.jpg";

export default function B(p) {
  let song, song2, analyzer, img, mic, fft, you, pho;

  p.preload = () => {
    song = p.loadSound(Elvn);
    song2 = p.loadSound(BK);
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
    song2.play();
  };

  p.draw = () => {
    // p.image(you, Math.floor(rms * window.innerWidth), 100, 200, 500);
    // // // Draw an ellipse with size based on volume
    for (let i = -100; i < window.innerWidth + 100; i = i + 100) {
      for (let j = -100; j < window.innerHeight + 100; j = j + 100) {
        p.text("B", i, j);
      }
    }
  };
}
