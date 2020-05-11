import React, { Component, useState, useEffect } from "react";
import P5Wrapper from "react-p5-wrapper";
import editionone from "../sketches/editionone";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Content from "../content/content";
import styles from "./pages.module.css";

const contentful = require("contentful");

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div
      style={{
        borderRadius: 2,
        padding: 10,
        display: "inline-block",
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
        style={{
          fontSize: "2em",
          padding: 5,
          fontFamily: "Vollkorn",
          borderColor: "#06069A",
        }}
        ref={(node) => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <br />
      <input
        style={{
          fontSize: "2em",
          padding: 5,
          fontFamily: "Vollkorn",
          borderColor: "#06069A",
        }}
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <br />
      <button
        style={{
          fontSize: "2em",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          backgroundColor: "#06069A",
          color: "#FFF7E8",
          fontFamily: "Vollkorn",
        }}
        onClick={submit}
      >
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
      <div style={{ backgroundColor: "#FFF7E8", textAlign: "center" }}>
        <div style={{ display: "inline-block" }}>
          <h1>Get notified when edition one releases</h1>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const getContent = async () => {
      let client = contentful.createClient({
        space: "zt0mvirckb5a",
        accessToken: "KkHd0KIkU7CWpGQ6ih1wagGPdt_JTqO31gJaQ4skQq4",
      });

      let response = await client.getEntries("staticPoetry");
      console.log(response.items);
      setContent(response.items.slice(0, 3));
    };

    getContent();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {window.innerWidth < 600 ? (
          <div style={{ marginLeft: "100px" }}>
            <h1>This website is not yet compatable for small screens!</h1>
            <h3>For best results, please expand and refresh :)</h3>
          </div>
        ) : (
          <div style={{ marginLeft: "11%", marginRight: "auto" }}>
            <P5Wrapper sketch={editionone}></P5Wrapper>
          </div>
        )}
        <div className={styles.title}>
          <button className={styles.button}>Static Poetry</button>
        </div>
        <div style={{ marginLeft: "10vw" }}>
          {content != null ? (
            <div className={styles.flexGrid}>
              {content.map((content, i) => (
                <Content
                  key={i}
                  title={content.fields.title}
                  author={content.fields.author}
                  mediaType={"static"}
                  id={content.sys.id}
                />
              ))}
            </div>
          ) : (
            <div>
              <h5> loading content </h5>
            </div>
          )}
        </div>
        <div className={styles.title}>
          <button className={styles.button}>Interactive Media</button>
        </div>
        <div style={{ marginLeft: "10vw" }}>
          <div className={styles.flexGrid}>
            <Content
              style={{ flex: 1 }}
              title="Wild Ann Imagined"
              author="Sara Lucas"
              id="wildann"
              mediaType="interactive"
            />
            <Content
              style={{ flex: 1 }}
              title="Mist"
              author="Katherine Sun"
              id="mist"
              mediaType="interactive"
            />
            <Content
              style={{ flex: 1 }}
              title="Untitled"
              author="Kamau Walker"
              id="untitled"
              mediaType="interactive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
