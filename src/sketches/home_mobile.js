
export default function home_mobile(p) {
  let sine = 'SINE';
  let qua = 'QUA';
  let non = 'NON';
  let i = [];
  let gap = window.innerWidth/5;
  let margin = window.innerHeight/6 ;
  p.setup = () => {
    let canvas = p.createCanvas(window.innerWidth, 500);
    p.noStroke();
    p.frameRate(60);
    p.background('#FFF7E8');
    p.textFont("Vollkorn");
    p.frameRate(50);
    for (let k = 0; k < 260; k++){
      i.push(k);
    }
    for(let k = 260; k > 0; k--){
      i.push(k);
    }
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  }

  p.mapLetters = () => {
    p.background('#FFF7E8');
    let counter = 0;
    p.textSize(window.innerWidth/8);
    for(let x = 50; x < window.innerWidth - gap; x += gap) {
      let letter = sine.charAt(counter);
      p.text(letter, x, margin*2 - 100);
      counter++;
    }
    counter = 0;
    for(let x = 50; x < window.innerWidth - gap; x += gap) {
      let letter = qua.charAt(counter);
      p.text(letter, x, margin*2 );
      counter ++;
    }
    counter = 0;
    for(let x = 50; x < window.innerWidth - gap; x += gap) {
      let letter = non.charAt(counter);
      p.text(letter, x, margin*2+105);
      counter ++;
    }
    p.textSize(window.innerWidth/20);
    let description = 'An interactive digital magazine.'
    p.text(description,50, margin*2+180);
  }
  let count = 0;

  p.draw = () => {
    if(count === 510){
      count = 0;
    }
    count++;
    console.log(i[count]);
    p.fill(0, i[count]);
    p.mapLetters();
  }
}
