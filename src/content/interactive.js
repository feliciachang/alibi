import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from 'react-router-dom';
import P5Wrapper from 'react-p5-wrapper';
import mist from "../sketches/mist";
import "./content.css"

function Interactive (props){
    const [sketch, setSketch] = useState(null);

    useEffect(() => {
        const getInteractive = async() => {
            let searchParams = new URLSearchParams(window.location.search);
            console.log(searchParams.get('id'));
            setSketch(searchParams.get('id'));
        }
        
        getInteractive();
    }, [])

    console.log(sketch);

    return(
        <div>
            <P5Wrapper sketch={mist} ></P5Wrapper>
        </div>
    )
}

export default withRouter(Interactive);