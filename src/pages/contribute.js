import React, { Component, useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import '../App.css';
import Content from "../content/content";

const Contribute = () => {
    return(
        <div>
            <div style={{display: "flex"}}>
            <Content style={{flex: 1}} title="Mist" author="Katherine Sun" id="mist"/>
            <Content style={{flex: 1}} title="Untitled" author="Kamau Walker" id="newyork"/>
            <Content style={{flex: 1}} title="Blueberries and their Physiology" author="Felicia Chang" id="blueberries"/>
          </div>
        </div>
    )
}

export default Contribute;