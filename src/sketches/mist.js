export default function mist(p) {
  let canvas;

  let story = "They say chrysanthemums will raise the dead, \n Freeing tender lives from thickened mud. \n But when we visited your grave The yellow petals carved a groove \n For hallowed sleep. I wondered if we’d lost \n You, at the crossing of the roads, among \n The lamp lights in a night so grim \n Or dreamed it in an endless dream."
  let story2 = "Now, crippled with a phantom limb, \n I must flit through alleyways and comb \n Each street. You’d say, go elsewhere: the river \n Still flows and never looks back. \n Here the redness glows through mist \n Scattered into drops, expressed \n As fractured shimmering dew so frail \n I want to stay away awhile."
  let story3 = "The curb was made for sitting \n So I sat, watched rain upsetting \n The velvet of the sky. The backdrop \n Bloomed in angry color, churned up \n Numbness from your faded smile. I rose \n Only to fall again, could not cross \n The intersection of when you’d lived \n If red light still dimly cleaved."
  p.setup = () => {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    p.noStroke();
    p.background('#FFF7E8');
    p.textSize(window.innerWidth/40);
    p.textFont('Vollkorn');
    p.text('Mist', 170, 250, 160, 170);
    p.text('03', 70, 250, 170, 170);
    p.textSize(window.innerWidth/85);
    p.textLeading(20);
    p.text(story, window.innerWidth - 650, 250);
    p.text(story2, window.innerWidth - 650, 450);
    p.text(story3, window.innerWidth - 650, 650);
    p.text('move mouse to interact', window.innerWidth - 80, 60, 40, 640);
  }

  p.draw = () => {

  }
}
