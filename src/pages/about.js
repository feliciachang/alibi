import React, { Component, useState, useEffect } from 'react';

const About = () => {
    return(
        <div style={{marginBottom: "10%"}}>
        <div style={{fontSize: "50px", marginLeft: "20vw", marginTop: "10%", marginRight: "10vw"}}>
            Alibi is a new interactive magazine featuring an amalgamation of traditional creative writing and interactive media.
            We're not quite functional yet, but we're trying to be! 
        </div>
        <div style={{fontSize: "50px", marginLeft: "20vw", marginTop: "10%", marginRight: "10vw"}}>
            If you would like to submit work, please email felicia.chang@yale.edu. We are currently only taking static creative writing right now.
            But if you would like to participate in building interactive experiences, please reach out to the same email above. 
        </div>
        </div>
    )
}

export default About;