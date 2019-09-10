export default function newyork(p){
    let canvas;
    let water;

    let story = "Baptize me / in blurried whole notes / I have never known god / by any other face / never known survival / separate from the art of drowning / hold the waves in / your palms / let them bring you to / your knees / and pray for / anything / ephemeral / anything you know cannot stay long enough for you to grow / attached"

    let story2 = "Maybe don't pray for anything / Maybe just give god the rest / Even if god ain't never needed no breaks / Maybe you need a break from prayer, from yearning, from your own damn body / Let the melodies be enough holy to quell you and god's thoughts for the night / Blend them into whisper, let them wander with the sea's breeze "

    let story3 = "Because the last time my head broke the surface and gasped for air, I swear I saw the wind fracture into every synonym for inevitable"
    p.setup = () => {
      canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      p.noStroke();
      p.background('#FFF7E8');
      p.textSize(window.innerWidth/50);
      p.textFont('Vollkorn');
    }

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    }

    p.draw = () => {
      for(let i = 1; i < window.innerWidth+100; i = i+100){
        for(let k = 1; k < window.innerHeight+100; k = k+100){
          p.stroke(200, 130, 130, 127);
          p.fill('#FFF7E8');
          p.ellipse(i, k, p.mouseX/10 , p.mouseY/5);
          p.ellipse(i, k,  p.mouseY/5, p.mouseX/10);
        }
      }

      p.stroke(0);
      p.textSize(window.innerWidth/40);
      p.text('Drowning', 170, 170, 170, 170);
      p.text('02', 70, 170, 170, 170);
      p.noStroke();
      p.rect(window.innerWidth - 740, 130, 600, 400);
      p.fill(0);
      p.textSize(15);
      p.text('move mouse to interact', window.innerWidth - 80, 60, 40, 640);
      p.textSize(18);
      p.text(story, window.innerWidth - 700, 170, 540, 200);
      p.text(story2, window.innerWidth - 700, 300, 540, 600);
      p.text(story3, window.innerWidth - 700, 430, 540, 600);
    }
}
