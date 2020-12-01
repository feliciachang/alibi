import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import rgby from "./assets/ubeat_ambience.mp3";
import yellow from "./assets/yellow/yellow_voices.mp3";
import smiley from "./assets/yellow/smiley.png";
import facetrash from "./assets/blue/bluetrashcropped.png";
import blue from "./assets/blue/blue_voices.mp3";
import green from "./assets/green/green_voices.mp3";
import red from "./assets/red/red_voices.mp3";

import redimage from "./assets/red/red-cropped.png";
import greenimage from "./assets/green/handcropped.png";

export default function EditorsNote(p) {
  let particles = [];
  let textparticles = [];
  let song,
    yellowsound,
    bluesound,
    greensound,
    redsound,
    ylevel,
    blevel,
    glevel,
    rlevel,
    yellowimg,
    blueimg,
    greenimg,
    redimg,
    analyzer,
    img,
    mic,
    fft,
    cnvs;

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

    createTextParticle(inputString) {
      p.textSize(window.innerHeight / 20);
      p.textFont("Vollkorn");
      p.stroke(255);
      p.text(inputString, this.x, this.y);
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
    greensound = p.loadSound(green);
    redsound = p.loadSound(red);

    yellowimg = p.loadImage(smiley);
    blueimg = p.loadImage(facetrash);
    greenimg = p.loadImage(greenimage);
    redimg = p.loadImage(redimage);
  };

  p.setup = () => {
    cnvs = p.createCanvas(window.innerWidth, window.innerHeight);
    // p.background(255, 0, 0);
    for (let i = 0; i < window.innerHeight / 40; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < 4; i++) {
      textparticles.push(new Particle());
    }

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();
    ylevel = new p5.Amplitude();
    blevel = new p5.Amplitude();
    glevel = new p5.Amplitude();
    rlevel = new p5.Amplitude();
    // Patch the input to an volume analyzer
    analyzer.setInput(song);
    ylevel.setInput(yellowsound);
    blevel.setInput(bluesound);
    glevel.setInput(greensound);
    rlevel.setInput(redsound);

    song.loop();
    yellowsound.loop();
    bluesound.loop();
    greensound.loop();
    redsound.loop();
  };

  function stopSound() {
    if (song.isPlaying()) {
      song.pause();
      yellowsound.pause();
      bluesound.pause();
      greensound.pause();
      redsound.pause();
    } else {
      song.loop();
      yellowsound.loop();
      bluesound.loop();
      greensound.loop();
      redsound.loop();
    }
  }

  p.draw = () => {
    cnvs.mousePressed(stopSound);
    let rms = analyzer.getLevel();
    p.background(200, 200, 200, 5);
    // p.image(you, Math.floor(rms * window.innerWidth), 100, 200, 500);
    // // // Draw an ellipse with size based on volume

    if (song.isPlaying()) {
      for (let i = 0; i < textparticles.length; i++) {
        if (i === 0) {
          textparticles[i].createTextParticle("a zine of colors");
          textparticles[i].moveParticle();
        } else if (i === 1) {
          textparticles[i].createTextParticle("four colors in particular");
          textparticles[i].moveParticle();
        } else if (i === 2) {
          textparticles[i].createTextParticle("red green blue yellow");
          textparticles[i].moveParticle();
        } else if (i === 3) {
          textparticles[i].createTextParticle("why? we don't know either");
          textparticles[i].moveParticle();
        }
      }

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
      if (glevel.getLevel() > 0.1) {
        for (let i = 0; i < particles.length; i++) {
          particles[i].createParticle(greenimg);
          particles[i].moveParticle();
        }
      }

      if (rlevel.getLevel() > 0.1) {
        for (let i = 0; i < particles.length; i++) {
          particles[i].createParticle(redimg);
          particles[i].moveParticle();
        }
      }
    }
  };
}
