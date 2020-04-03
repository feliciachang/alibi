import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from 'react-router-dom';
import P5Wrapper from 'react-p5-wrapper';
import wildann from "../sketches/wildann";
import mist from "../sketches/mist";
import untitled from "../sketches/untitled";
import styles from "./content.module.css";

function Interactive (props){
    const [sketch, setSketch] = useState(null);

    useEffect(() => {
        const getInteractive = async() => {
            let searchParams = new URLSearchParams(window.location.search);
            console.log(searchParams.get('id'));
            let id = searchParams.get('id');
            setSketch(id);
        }
        getInteractive();
    }, []);

    const renderComponent = () => {
        switch(sketch){
            case 'mist': return <P5Wrapper sketch={mist} ></P5Wrapper>;
            case 'wildann': return <P5Wrapper sketch={wildann} ></P5Wrapper>;
            case 'untitled': return <P5Wrapper sketch={untitled} ></P5Wrapper>;
        }
    }


    console.log(sketch);

    return(
        <div>
            {renderComponent()}
        </div>
    )
}

export default withRouter(Interactive);