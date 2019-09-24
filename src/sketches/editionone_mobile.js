export default function home(p) {
  let edition = 'edition 01';
  let letter = 'Sine Qua Non is an interactive digital magazine meant to challenge the current information culture in which content is consumed passively. Through interactivity, Sine Qua Non hopes to make the reader part of the work itself. Your participation is essential to your experience of this magazine. \n\n If you are interested in submitting work for our first edition, please email readsinequanon@gmail.com by October 15. Your work should explore the meaning of "sine qua non," a Latin phrase that means “an essential condition.” We hope to hear your persepctive on what is essential to the human experience in the form of poetry, art, and prose.'
  p.setup = () => {
    let canvas = p.createCanvas(window.innerWidth, 600);
    p.background('#FFF7E8');
    p.textFont("Vollkorn");
    p.textSize(window.innerHeight/40);
    p.fill('#06069A');
    p.text(letter, 50, 100, window.innerWidth - 100, 800);
    //p.text('clickto interact', window.innerWidth - 100, 60, 40, 640);
// p.frameRate(5);
  }

// '#565A5D'
  p.draw = () => {
    //p.background('#FFF7E8');

    // p.fill('#06069A');
    // p.textSize(window.innerHeight/15);
    // p.text(edition, p.mouseX, p.mouseY);
    // if(p.mouseIsPressed){
    //   p.text(edition, p.mouseX, p.mouseY);
    // }
  }
}
