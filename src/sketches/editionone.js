
export default function home(p) {
  let edition = 'Alibi';
  let note = 'A note from the editor';
  let letter = 'Alibi is a digital space for interactive media and writing. Our goal is to challenge the current information culture in which content is consumed passively. Through interactivity, Alibi hopes to make the reader part of the work itself. \n\n Amidst the Covid-19 crisis, we hope that this small space of weird, creative content will make you smile, ponder, and perhaps feel a little less isolated.'
  let width = 700;
  let height = 300;
  p.setup = () => {

    let canvas = p.createCanvas(width, height);
    p.textFont("Vollkorn");
    p.fill('#06069A');
    // p.frameRate(5);
    p.rectMode("CENTER");
    p.rect(0, 0, window.innerWidth, height);
  }

// '#565A5D'
  p.draw = () => {
    //p.background('#FFF7E8');
    p.fill('#FFF7E8');
    p.textSize(30);
    p.text(note, width/2, 150, 200, 200)
    p.textSize(20);
    p.fill('#06069A');
    p.text(letter, width/8, height/6, width/(1.3), 500);
    p.fill('#FFF7E8');
    p.textSize(50);
    p.textStyle(p.BOLD);
    p.text(edition, p.mouseX, p.mouseY);
    p.fill('#06069A');
    // if(p.mouseIsPressed){
    //   p.text(edition, p.mouseX, p.mouseY);
    // }
  }
}
