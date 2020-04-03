import React, { Component, useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import editionone from '../sketches/editionone';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Content from "../content/content";
import styles from "./pages.module.css";
import Interactive from "./interactivemedia";
import StaticMedia from "./staticpoetry";

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

    return (
      <div>
        <div className={styles.container}>
            {
                window.innerWidth < 600 ? (
                    <div style={{marginLeft: "100px"}}>
                    <h1>This website is not yet compatable for small screens!</h1>
                    </div>
                ):( 
                    <div style={{marginLeft: "13%", marginRight: "auto"}}>
                    <P5Wrapper sketch={editionone} ></P5Wrapper>
                    </div>
                )   
            }
            <br/>
            <br/>
            <div className={styles.title}>
                <button className={styles.button}>Static Poetry</button>
            </div>
            <StaticMedia/>
            <div className={styles.title}>
                <button className={styles.button}>Interactive Media</button>
            </div>
            <Interactive/>
        </div>
      </div>
    )
}

export default Home;
