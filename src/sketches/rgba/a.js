import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import rgby from "./assets/rbgy_ambience.mp3";
import yellow from "./assets/yellow/yellow_voices.mp3";
import yellowhead from "./assets/yellow/yellowhead.png";
import honeycombs from "./assets/yellow/honeycombs.png";
import smiley from "./assets/yellow/smiley.png";

export default function A(p) {
  let particles = [];
  let song,
    rms,
    song2,
    analyzer,
    img,
    img2,
    img3,
    mic,
    fft,
    you,
    pho,
    voice,
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
    song2 = p.loadSound(yellow);
    img = p.loadImage(yellowhead);
    img2 = p.loadImage(honeycombs);
    img3 = p.loadImage(smiley);
  };

  p.setup = () => {
    cnvs = p.createCanvas(window.innerWidth, window.innerHeight);

    for (let i = 0; i < window.innerHeight / 50; i++) {
      particles.push(new Particle());
    }

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();
    voice = new p5.Amplitude();

    // Patch the input to an volume analyzer
    analyzer.setInput(song);
    voice.setInput(song2);

    song.play();
    song2.play();
  };

  function stopSound() {
    if (song.isPlaying()) {
      song.pause();
      song2.pause();
    } else {
      song.loop();
      song2.loop();
    }
  }

  p.draw = () => {
    cnvs.mousePressed(stopSound);
    let rms = analyzer.getLevel();
    let voicelevel = voice.getLevel();
    p.background(200, 200, 0, 1);
    // p.image(you, Math.floor(rms * window.innerWidth), 100, 200, 500);
    // // // Draw an ellipse with size based on volume

    // for (let i = 0; i < window.innerWidth; i = i + 100) {
    //   for (let j = 0; j < window.innerHeight; j = j + 100) {
    //     p.image(
    //       img2,
    //       i,
    //       j,
    //       i / 10 - voicelevel * window.innerHeight,
    //       j / 10 - voicelevel * window.innerHeight
    //     );
    //   }
    // }

    if (song.isPlaying()) {
      for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle(img3);
        particles[i].moveParticle();
      }

      if (rms > 0.1) {
        for (let i = 0; i < particles.length; i++) {
          particles[i].createParticle(img);
          particles[i].moveParticleToCenter();
        }
      }
    }

    // for (let i = -100; i < window.innerWidth + 100; i = i + 100) {
    //   for (let j = -100; j < window.innerHeight + 100; j = j + 100) {
    //     p.text("B", i, j);
    //   }
    // }
  };
}
