
export default function home(p) {
  let edition = 'edition 01';
  let letter = 'Sine Qua Non is a Latin phrase that means “an essential condition” or “thing that is absolutely necessary.” The works in this publication will seek to comment on things essential to the human experience, such as identity, purpose, and community. \n \n Sine Qua Non is an interactive digital magazine meant to challenge the current status of information culture in which content is consumed passively. Through interactivity, Sine Qua Non hopes make the reader part of the work itself. Your input is valuable to the experience of this magazine. Enjoy.'
  p.setup = () => {
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    p.background('#2771A8');
    p.textFont("Vollkorn");
    // p.frameRate(5);
  }

// '#565A5D'
  p.draw = () => {
    //p.background('#FFF7E8');
    p.textSize(40);
    p.fill('#2771A8');
    p.text(letter, window.innerWidth/5, window.innerHeight/5, 800, 800);
    p.fill('#DB9C71');
    p.textSize(80);
    p.textStyle(p.BOLD);
    p.text(edition, p.mouseX, p.mouseY);
    p.textSize(15);
    p.text('move mouse to interact', window.innerWidth - 80, 60, 40, 640);
    // if(p.mouseIsPressed){
    //   p.text(edition, p.mouseX, p.mouseY);
    // }
  }
}
