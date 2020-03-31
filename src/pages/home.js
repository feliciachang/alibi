import React, { Component, useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import P5Wrapper from 'react-p5-wrapper';
import newyork from '../sketches/newyork';
import mist from '../sketches/mist';
import editionone from '../sketches/editionone';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import '../App.css';
import Navbar from "../navbar";
import Content from "../content/content";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div
      style={{
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#06069A" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5, fontFamily: "Vollkorn", borderColor: '#06069A'}}
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5, fontFamily: "Vollkorn", borderColor: '#06069A' }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <br />
      <button style={{ fontSize: "2em", paddingLeft: 20, paddingRight: 20, paddingTop: 10, backgroundColor: '#06069A', color: '#FFF7E8', fontFamily: "Vollkorn"}} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

class Demo extends Component {
  render() {
    const url =
      "https://gmail.us20.list-manage.com/subscribe/post?u=efcf53e5cc53e101735848444&amp;id=9d9a5c1f74";
    return (
      <div style= {{backgroundColor: '#FFF7E8', textAlign: "center"}}>
      <div style={{display: "inline-block"}}>
        <h1>Get notified when edition one releases</h1>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
      </div>
    );
  }
}

function Home() {

    let history = useHistory();

    return (
      <div>
        <Navbar/>
        <div className="app">
          <div style={{marginBottom: "3%"}}>
            <button style={{border: "1px solid black", borderRadius: "2rem", fontSize: "15px"}}>Static Poetry</button>
          </div>
          <div style={{display: "flex"}}>
            <Content style={{flex: 1}} title="Mist" author="Katherine Sun" id="mist"/>
            <Content style={{flex: 1}} title="Untitled" author="Kamau Walker" id="newyork"/>
            <Content style={{flex: 1}} title="Blueberries and their Physiology" author="Felicia Chang" id="blueberries"/>
          </div>
          <div style={{marginBottom: "3%", marginTop: "10%"}}>
            <button style={{border: "1px solid black", borderRadius: "2rem", fontSize: "15px"}}>Interactive Art</button>
          </div>
          <div style={{display: "flex"}}>
            <Content style={{flex: 1}} title="Mist" author="Katherine Sun" id="mist"/>
            <Content style={{flex: 1}} title="Mist" author="Katherine Sun" id="mist"/>
            <Content style={{flex: 1}} title="Mist" author="Katherine Sun" id="mist"/>
          </div>
            <div style={{marginBottom: "3%", marginTop: "10%"}}>
                <button style={{border: "1px solid black", borderRadius: "2rem", fontSize: "15px"}}>A note from the editor</button>
            </div>
            <P5Wrapper sketch={editionone} ></P5Wrapper>
        </div>
      </div>
    )
}

export default Home;
