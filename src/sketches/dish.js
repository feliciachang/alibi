import React , { Component}  from 'react';

export default function mist(p) {
  let canvas;
  let story = "suddenly i've taken to, \nwashing everything \nby hand"
  let story2 = "{"
  let story3 = "behind that placid surface \n of stainless steel, a dance \n unfolds which i \n may never witness. and \n isn't it the unkonwn which we are afraid of, \n more than anything? the \n indefinite, we give"
  let story4 = "it names: corona, covid, \n SARS-CoV-2. we reckon \n with discomfort by looking \n to history for standards \n of survival. but how \n does one carry oneself through the unprecedented?"
  let story5 = "}"
  let story6 = "for fear"
  let story7 = "of what goes on"
  let story8 = "inside the dishwasher"

  p.setup = () => {
    console.log("mist");
    canvas = p.createCanvas(window.innerWidth, 800);
    diameter = window.innerHeight/8-10;
    p.noStroke();
    p.frameRate(30);
    p.background('#FFF7E8');
    p.textSize(window.innerWidth/35);
    p.textFont('Vollkorn');
    p.text('Mist', 170, 250, 160, 170);
    p.textSize(window.innerWidth/70);
    p.textLeading(window.innerHeight/35);
    p.text(story, window.innerWidth - 750, 150);
    p.text(story2, window.innerWidth - 750, 390);
    p.text(story3, window.innerWidth - 750, 650);
    p.text('move mouse to interact', window.innerWidth - 80, 60, 40, 640);
    p.text('press any key for next page', window.innerWidth - 100, (window.innerHeight/4)*3+100, 40, 640);
  }

  // p.windowResized = () => {
  //   p.resizeCanvas(window.innerWidth, window.innerHeight);
  // }

      // p.point(p.random(0, 350), p.random(0,400));
      // p.point(p.random(0, 350), p.random(0,400));
    let value = 0;

    let diameter;
    let angle = 0;
    let counter = 0;
  p.draw = () => {
    let d1 = 100 + (p.sin(angle) * diameter) / 2 + diameter / 2;
    p.background('#FFF7E8');
    p.fill(200, p.mouseX/10, p.mouseX/10, 100);
    p.noStroke();
    p.textSize(window.innerWidth/30);
    p.textFont('Vollkorn');
    p.text('Mist', window.innerWidth - 650, 100, 300, 170);

    p.fill(200, p.mouseX/10, p.mouseX/10, 100);
    p.rect(window.innerWidth - 650, 100, d1, 850);
    p.fill(0);
    p.textSize(window.innerWidth/70);
    p.textLeading(window.innerHeight/35);
    p.text(story, window.innerWidth - 580, 170);
    p.text(story2, window.innerWidth - 580, 370);
    p.text(story3, window.innerWidth - 580, 570);
    p.textSize(window.innerHeight/70);
    p.textLeading(window.innerHeight/50);

    p.fill(196, 56, 43, 10);
    p.noStroke();
  //  p.ellipse(p.random(0, window.innerWidth/2), window.innerHeight / 2, d1, d1);
  //  p.ellipse(100, window.innerHeight / 2, d1, d1);
    angle += 0.02;


    // console.log("draw");
    // p.stroke("#2D8AB4") //blue
    // p.line(p.mouseX, p.mouseY-1, p.mouseX, p.mouseY);
    // let noiseVal = p.noise(p.mouseX, p.mouseY);
    // p.stroke("#2D8AB4"); //blue
    // p.point(p.random(0,window.innerWidth), p.random(0,window.innerHeight));
    // p.point(p.random(0,window.innerWidth), p.random(0,window.innerHeight));
    // p.point(p.random(0,window.innerWidth), p.random(0,window.innerHeight));
    // p.stroke("#C43640") //red
    // p.point(p.random(0,window.innerWidth), p.random(0,window.innerHeight));
    // p.point(p.random(0,window.innerWidth), p.random(0,window.innerHeight));
    // p.point(p.random(0,window.innerWidth), p.random(0,window.innerHeight));

  }
}
