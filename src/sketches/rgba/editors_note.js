import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import rgby from "./assets/rbgy_ambience.mp3";
import yellow from "./assets/yellow/yellow_voices.mp3";
import smiley from "./assets/yellow/smiley.png";
import facetrash from "./assets/blue/bluetrashcropped.png";
import blue from "./assets/blue/blue_voices.mp3";

export default function EditorsNote(p) {
  let particles = [];
  let song,
    yellowsound,
    bluesound,
    ylevel,
    blevel,
    yellowimg,
    blueimg,
    analyzer,
    img,
    mic,
    fft;

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
    yellowsound = p.loadSound(yellow);
    bluesound = p.loadSound(blue);

    yellowimg = p.loadImage(smiley);
    blueimg = p.loadImage(facetrash);
  };

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    // p.background(255, 0, 0);
    for (let i = 0; i < window.innerHeight / 50; i++) {
      particles.push(new Particle());
    }

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();
    ylevel = new p5.Amplitude();
    blevel = new p5.Amplitude();
    // Patch the input to an volume analyzer
    analyzer.setInput(song);
    ylevel.setInput(yellowsound);
    blevel.setInput(bluesound);
    p.textSize(window.innerWidth / 20);
    p.textFont("Vollkorn");

    song.play();
    yellowsound.play();
    bluesound.play();
  };

  p.draw = () => {
    let rms = analyzer.getLevel();
    // p.image(you, Math.floor(rms * window.innerWidth), 100, 200, 500);
    // // // Draw an ellipse with size based on volume
    p.text(
      "Anthony Skinner",
      window.innerWidth / 2 - 200,
      window.innerHeight / 2 - 100
    );
    p.text(
      "Felicia Chang",
      window.innerWidth / 2 - 200,
      window.innerHeight / 2 - 300
    );
    p.text(
      "Max Mulpagano",
      window.innerWidth / 2 - 200,
      window.innerHeight / 2 - 200
    );
    p.text(
      "Du Shaunte Halloway",
      window.innerWidth / 2 - 200,
      window.innerHeight / 2
    );

    if (ylevel.getLevel() > 0.1) {
      for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle(yellowimg);
        particles[i].moveParticle();
      }
    }

    if (blevel.getLevel() > 0.1) {
      for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle(blueimg);
        particles[i].moveParticle();
      }
    }
  };
}
