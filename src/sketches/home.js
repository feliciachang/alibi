
export default function home(p) {
  let sine = 'SINE';
  let qua = 'QUA';
  let non = 'NON';
  let i = [];
  let gap = 400/6;
  let margin = 200/4 ;
  p.setup = () => {
    let canvas = p.createCanvas(400, 400);
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
    p.resizeCanvas(400, 400);
  }

  p.mapLetters = () => {
    p.background('#FFF7E8');
    // p.textSize(400/70);
    // p.text('scroll to learn more', window.innerWidth - 100, margin-120, 40, 640);
    // p.text('click screen + arrow key for next page', window.innerWidth - 100, (window.innerHeight/4)*3+100, 40, 640);
    let counter = 0;
    p.textSize(400/10);
    for(let x = 100; x < 400 - gap; x += gap) {
      let letter = sine.charAt(counter);
      p.text(letter, x, margin - 45);
      counter++;
    }
    counter = 0;
    for(let x = 100; x < 400 - gap; x += gap) {
      let letter = qua.charAt(counter);
      p.text(letter, x, margin*2 - 45);
      counter ++;
    }
    counter = 0;
    for(let x = 100; x < 400 - gap; x += gap) {
      let letter = non.charAt(counter);
      p.text(letter, x, margin*3 - 25);
      counter ++;
    }
    p.textSize(400/20);
    let description = 'An interactive digital magazine.'
    p.text(description,100, margin*4-80);
  }
  let count = 0;

  p.draw = () => {
    if(count === 510){
      count = 0;
    }
    count++;
    // console.log(i[count]);
    p.fill(0, i[count]);
    p.mapLetters();
  }
}
