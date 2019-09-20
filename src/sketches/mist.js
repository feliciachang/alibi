export default function mist(p) {
  let canvas;

  let story = "They say chrysanthemums will raise the dead, \n Freeing tender lives from thickened mud. \n But when we visited your grave \n The yellow petals carved a groove \n For hallowed sleep. I wondered if we’d lost \n You, at the crossing of the roads, among \n The lamp lights in a night so grim \n Or dreamed it in an endless dream."
  let story2 = "Now, crippled with a phantom limb, \n I must flit through alleyways and comb \n Each street. You’d say, go elsewhere: the river \n Still flows and never looks back. \n Here the redness glows through mist \n Scattered into drops, expressed \n As fractured shimmering dew so frail \n I want to stay away awhile."
  let story3 = "The curb was made for sitting \n So I sat, watched rain upsetting \n The velvet of the sky. The backdrop \n Bloomed in angry color, churned up \n Numbness from your faded smile. I rose \n Only to fall again, could not cross \n The intersection of when you’d lived \n If red light still dimly cleaved."
  p.setup = () => {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    diameter = window.innerHeight/8-10;
    p.noStroke();
    p.frameRate(30);
    p.background('#FFF7E8');
    p.textSize(window.innerWidth/35);
    p.textFont('Vollkorn');
    p.text('Mist', 170, 250, 160, 170);
    p.text('01', 70, 250, 170, 170);
    p.textSize(window.innerWidth/70);
    p.textLeading(window.innerHeight/35);
    p.text(story, window.innerWidth - 750, 150);
    p.text(story2, window.innerWidth - 750, 390);
    p.text(story3, window.innerWidth - 750, 650);
    p.text('move mouse to interact', window.innerWidth - 80, 60, 40, 640);
    p.text('click for next page', window.innerWidth - 100, (window.innerHeight/4)*3+100, 40, 640);
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
    p.text('Mist', 200, 250, 160, 170);
    p.text('01', 100, 250, 170, 170);

    p.fill(200, p.mouseX/10, p.mouseX/10, 100);
    p.rect(window.innerWidth - 800, 100, d1, 850);
    p.fill(0);
    p.textSize(window.innerWidth/70);
    p.textLeading(window.innerHeight/35);
    p.text(story, window.innerWidth - 750, 150);
    p.text(story2, window.innerWidth - 750, 420);
    p.text(story3, window.innerWidth - 750, 690);
    p.textLeading(window.innerHeight/50);
    p.text('move mouse to interact', window.innerWidth - 100, 60, 40, 640);
        p.text('click for next page', window.innerWidth - 100, (window.innerHeight/4)*3+100, 40, 640);

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
