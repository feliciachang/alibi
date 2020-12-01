import React, { useState, useEffect, useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
import P5Wrapper from "react-p5-wrapper";
import editionone from "../sketches/editionone";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Content from "../content/content";
import styles from "./pages.module.css";

const contentful = require("contentful");

function Home() {
  const [content, setContent] = useState(null);
  const [fromHeroku, setFromHeroku] = useState(null);

  useEffect(() => {
    const getContent = async () => {
      let client = contentful.createClient({
        space: "zt0mvirckb5a",
        accessToken: "KkHd0KIkU7CWpGQ6ih1wagGPdt_JTqO31gJaQ4skQq4",
      });

      let response = await client.getEntries("staticPoetry");
      console.log(response.items);
      setContent(response.items.slice(0, 6));
    };

    // const getFromHeroku = async () => {
    //   let response = await fetch("http://localhost:5000/getonepoem", {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     method: "post",
    //     body: JSON.stringify({ id: id }),
    //   });
    //   let db = await response.json();
    //   setFromHeroku(db);
    // }
    getContent();
    // getFromHeroku();
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
          <button className={styles.button}>RGBY</button>
        </div>
        <div style={{ marginLeft: "10vw" }}>
          <div className={styles.flexGrid}>
            <Content
              style={{ flex: 1 }}
              title="Rigby"
              author="RGBY"
              id="rgba"
              mediaType="interactive"
            />
            <Content
              style={{ flex: 1 }}
              title="Red"
              author=""
              id="r"
              mediaType="interactive"
            />
            <Content
              style={{ flex: 1 }}
              title="Green"
              author=""
              id="g"
              mediaType="interactive"
            />
            <Content
              style={{ flex: 1 }}
              title="Blue"
              author=""
              id="b"
              mediaType="interactive"
            />
            <Content
              style={{ flex: 1 }}
              title="Yellow"
              author=""
              id="a"
              mediaType="interactive"
            />
          </div>
        </div>
        <div className={styles.title}>
          <button className={styles.button}>Interactive</button>
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
            <Content
              style={{ flex: 1 }}
              title="Black Kosa"
              author="Coupe Del Mar"
              id="blackkosa"
              mediaType="interactive"
            />
            <Content
              style={{ flex: 1 }}
              title="11pm"
              author="Coupe Del Mar"
              id="11pm"
              mediaType="interactive"
            />
            <Content
              style={{ flex: 1 }}
              title="11pm and You're 1%"
              author="Coupe Del Mar"
              id="11pm2"
              mediaType="interactive"
            />
          </div>
        </div>
        <div className={styles.title}>
          <button className={styles.button}>Static</button>
        </div>
        <div style={{ marginLeft: "10vw", width: "80%" }}>
          {content != null ? (
            <div className={styles.flexGrid2}>
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
      </div>
    </div>
  );
}

export default Home;
