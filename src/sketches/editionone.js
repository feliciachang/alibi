
export default function home(p) {
  let edition = 'Alibi';
  let letter = 'Alibi is a digital space for interactive media and writing. Our goal is to challenge the current information culture in which content is consumed passively. Through interactivity, Alibi hopes to make the reader part of the work itself. \n\n Amidst the Covid-19 crisis, we hope that this small space of weird, creative content will make you smile, ponder, and perhaps feel a little less isolated. \n\n If you are interested in submitting work, please email felicia.chang@yale.edu.'
  let width = 700;
  let height = 500;
  p.setup = () => {

    let canvas = p.createCanvas(width, height);
    p.textFont("Vollkorn");
    p.fill('#06069A');
    // p.frameRate(5);
    p.rectMode("CENTER");
    p.rect(0, 0, width, height);
  }

// '#565A5D'
  p.draw = () => {
    //p.background('#FFF7E8');
    p.textSize(20);
    p.fill('#06069A');
    p.text(letter, width/6, height/6, width/(1.5), 500);
    p.fill('#FFF7E8');
    p.textSize(40);
    p.textStyle(p.BOLD);
    p.text(edition, p.mouseX, p.mouseY);
    p.fill('#06069A');
    // if(p.mouseIsPressed){
    //   p.text(edition, p.mouseX, p.mouseY);
    // }
  }
}
