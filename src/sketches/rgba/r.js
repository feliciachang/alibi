import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import rgby from "./assets/rbgy_ambience.mp3";
import facetrash from "./assets/blue/bluetrashcropped.png";
import gloves from "./assets/blue/gloves.png";

export default function B(p) {
  let particles = [];
  let song, rms, song2, analyzer, img, img2, mic, fft, you, pho;

  // this class describes the properties of a single particle.
  class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor() {
      this.x = p.random(0, window.innerWidth);
      this.y = p.random(0, window.innerHeight);
      this.r = p.random(10, 100);
      this.xSpeed = p.random(-2, 2);
      this.ySpeed = p.random(-1, 1.5);
    }

    // creation of a particle.
    createParticle(img) {
      p.image(img, this.x, this.y, this.r, this.r);
    }

    // setting the particle in motion.
    moveParticle() {
      if (this.x < 0 || this.x > window.innerWidth) this.xSpeed *= -1;
      if (this.y < 0 || this.y > window.innerHeight) this.ySpeed *= -1;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }

    moveParticleToCenter() {
      if (this.x < 0 || this.x > window.innerWidth) this.xSpeed *= -5;
      if (this.y < 0 || this.y > window.innerHeight) this.ySpeed *= -5;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }
  }

  p.preload = () => {
    song = p.loadSound(rgby);
    img = p.loadImage(facetrash);
    img2 = p.loadImage(gloves);
  };

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);

    for (let i = 0; i < window.innerHeight / 50; i++) {
      particles.push(new Particle());
    }

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
    let rms = analyzer.getLevel();
    p.background(0, 0, 200, 1);
    // p.image(you, Math.floor(rms * window.innerWidth), 100, 200, 500);
    // // // Draw an ellipse with size based on volume
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle(img);
      particles[i].moveParticle();
    }

    if (rms > 0.1) {
      for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle(img2);
        particles[i].moveParticleToCenter();
      }
    }

    // for (let i = -100; i < window.innerWidth + 100; i = i + 100) {
    //   for (let j = -100; j < window.innerHeight + 100; j = j + 100) {
    //     p.text("B", i, j);
    //   }
    // }
  };
}
