import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import P5Wrapper from "react-p5-wrapper";
import wildann from "../sketches/wildann";
import mist from "../sketches/mist";
import untitled from "../sketches/untitled";
import blackKosa from "../sketches/blackKosa";
import ElvnPM from "../sketches/11pm";
import ElvnPM2 from "../sketches/11pm2";
import R from "../sketches/rgba/r";
import G from "../sketches/rgba/g";
import B from "../sketches/rgba/b";
import A from "../sketches/rgba/a";
import EditorsNote from "../sketches/rgba/editors_note";
import styles from "./content.module.css";

function Interactive(props) {
  const [sketch, setSketch] = useState(null);

  useEffect(() => {
    const getInteractive = async () => {
      let searchParams = new URLSearchParams(window.location.search);
      console.log(searchParams.get("id"));
      let id = searchParams.get("id");
      setSketch(id);
    };
    getInteractive();
  }, []);

  const renderComponent = () => {
    switch (sketch) {
      case "mist":
        return <P5Wrapper sketch={mist}></P5Wrapper>;
      case "wildann":
        return <P5Wrapper sketch={wildann}></P5Wrapper>;
      case "untitled":
        return <P5Wrapper sketch={untitled}></P5Wrapper>;
      case "blackkosa":
        return <P5Wrapper sketch={blackKosa}></P5Wrapper>;
      case "11pm":
        return <P5Wrapper sketch={ElvnPM}></P5Wrapper>;
      case "11pm2":
        return <P5Wrapper sketch={ElvnPM2}></P5Wrapper>;
      case "r":
        return <P5Wrapper sketch={R}></P5Wrapper>;
      case "g":
        return <P5Wrapper sketch={G}></P5Wrapper>;
      case "b":
        return <P5Wrapper sketch={B}></P5Wrapper>;
      case "a":
        return <P5Wrapper sketch={A}></P5Wrapper>;
      case "rgba":
        return <P5Wrapper sketch={EditorsNote}></P5Wrapper>;
    }
  };

  console.log(sketch);

  return <div>{renderComponent()}</div>;
}

export default withRouter(Interactive);
