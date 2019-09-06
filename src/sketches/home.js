export default function home(p) {
  let sine = 'SINE';
  let qua = 'QUA';
  let non = 'NON';
  p.setup = () => {
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    p.noStroke();
    p.background('#FFF7E8');
    p.textSize(window.innerWidth/10);
    p.textFont("Vollkorn");
  }

  p.draw = () => {
    let gap = window.innerWidth/5;
    let margin = window.innerHeight/4
    let counter = 0;
      for(let x = 100; x < window.innerWidth - gap; x += gap) {
        let letter = sine.charAt(counter);
        p.text(letter, x, margin);
        counter ++;
      }
      counter = 0;
      for(let x = 100; x < window.innerWidth - gap; x += gap) {
        let letter = qua.charAt(counter);
        p.text(letter, x, margin*2);
        counter ++;
      }
      counter = 0;
      for(let x = 100; x < window.innerWidth - gap; x += gap) {
        let letter = non.charAt(counter);
        p.text(letter, x, margin*3 + 10);
        counter ++;
      }
      p.textSize(window.innerWidth/20);
    let description = 'An interactive digital magazine.'
    p.text(description, 100, margin*4-50);

    p.noLoop();
  }
}
