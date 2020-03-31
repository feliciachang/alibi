import React , { Component}  from 'react';
import water from "./assets/water.jpg";

export default function image(p) {
  let img = "https://felswebsite.s3.amazonaws.com/Allison+Mishkin.png";
  p.setup = () => {
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
  }
  p.draw = () => {
    //p.createImg(img);
  }
}
