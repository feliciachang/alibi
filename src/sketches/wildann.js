export default function sketch(p){
    let canvas;
    let water;

    let story = "In a tent she calls simplicity \nAnn begins her fire, and sits calmly \nas flames lick the cotton sides. \nWatch with her as the fabric burns,"
    let story2 = "knowing that the patient person \nis always better than the proud \nShe stands tall before the blazing. \nInwardly, she bows."
    let story3 = "On a campground she calls serenity \nAnn wipes her eyes on the leaves \nof an oak tree, lets her hair grow long, \nruns whooping wild through forest"
    let story4 = "into future. She hollers with delight to \na land Where the Wild Things Are. \nShe tears her clothes and rubs mud \ninto her cheekbones, delighting in the"
    let story5 = "sheer joy of no-longer-living. Sometimes \na woman will leave just to remember \nher ferocity within, to exchange the pliant \nfor the primal, to fly away on a whisper \ninto the roaring wind."
   

    p.setup = () => {
      canvas = p.createCanvas(window.innerWidth, window.innerHeight + 50);
      p.noStroke();
      p.background('#FFF7E8');
      p.textSize(window.innerWidth/40);
      p.textFont('Vollkorn');
      p.text('Wild Ann Imagined', 300, 250, 160, 170);
      p.textSize(window.innerWidth/75);
      p.text(story, window.innerWidth - 650, 100, 300, 640);
      p.text(story2, window.innerWidth - 650, 200, 500, 640);
      p.text(story3, window.innerWidth - 650, 300, 500, 640);
      p.text(story4, window.innerWidth - 650, 400, 500, 640);
      p.text(story5, window.innerWidth - 650, 500, 500, 640);
    }

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    }

    // for(int i = 0; i < 1100; i = i + 1) {
    //     stroke(200, 130, 130, 200);
    //     line(i, 0, i, sin(i+2)*1100);
    //   }

    p.draw = () => {
        p.background('#FFF7E8');

        for(let i = 1; i < window.innerWidth; i=i+3){
            p.stroke(255, 100, 0, 255);
            p.line(i + p.mouseX / 100, window.innerHeight+50, i+2, window.innerHeight - (p.sin(i+2) * p.mouseX/2) );
            p.stroke(255, 20, 0, 200);
            p.line(i-1 - p.mouseX / 100, window.innerHeight+50, i+2, window.innerHeight - (p.sin(i+2) * p.mouseY/2) );
            p.stroke(255, 20, 0, 100);
            p.line(i , window.innerHeight+50, i+2, 0);
        }
        
        p.textSize(32);
        p.fill(255, 20, 0, 100);
        p.textFont('Vollkorn');
        p.text('Wild Ann Imagined', window.innerWidth - 650, 100, 300, 170);
        p.textFont('Vollkorn');
        p.textSize(15);
        p.text('Sara Lucas', window.innerWidth - 645, 140, 300, 170);
        p.fill(0);
        p.stroke(255);
        p.text(story, window.innerWidth - 645, 200, 300, 640);
        p.text(story2, window.innerWidth - 645, 290, 500, 640);
        p.text(story3, window.innerWidth - 645, 380, 500, 640);
        p.text(story4, window.innerWidth - 645, 470, 500, 640);
        p.text(story5, window.innerWidth - 645, 560, 500, 640);
       
    }
}
