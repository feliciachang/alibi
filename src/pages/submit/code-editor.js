import React, { useState, useContext, useMemo } from "react";
import { CodeHeader } from "./header";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import styles from "./editor.module.css";

import { UserContext } from "../../UserContext";

const Code = ({ setCode }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [success, setSuccess] = useState();
  const [save, setSave] = useState("");
  const [publish, setPublish] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [compile, setCompile] = useState(false);
  console.log("compile status", compile);

  const [title, setTitle] = useState(
    JSON.parse(sessionStorage.getItem("codetitle")) || [
      {
        type: "title",
        children: [{ text: "Title" }],
      },
    ]
  );

  const [text, setText] = useState(
    sessionStorage.getItem("codetext") ||
      `
  <h3>This is a real-time HTML editor</h3>

  <p>Add javascript libraries with script tags like so: </p>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
  <script>
  function setup() {

  }
  function draw() {
    ellipse(50, 50, 80, 80);
  }
  </script>
  `
  );

  const handleSubmit = async () => {
    let staticJson;
    if (publish) {
      staticJson = {
        id: user.id,
        title: title,
        text: text,
        published: false,
      };
      try {
        let response = await fetch(
          "https://alibi-backend.herokuapp.com/publishcode",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(staticJson),
          }
        );
        let poem = await response.json();
        if (poem.message === true) {
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      staticJson = {
        id: 0,
        userId: user.id,
        title: title,
        text: text,
        published: false,
      };
      try {
        let response = await fetch(
          "https://alibi-backend.herokuapp.com/savecode",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(staticJson),
          }
        );
        let poem = await response.json();
        if (poem.message === true) {
          setSave("Saved!");
        } else {
          setSave(poem.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //this will need to redirect to the actual poem
  return (
    <div>
      {compile == true ? (
        <div>
          <CodeHeader
            setCode={setCode}
            setCompile={setCompile}
            setPublish={setPublish}
            handleSubmit={handleSubmit}
          />
          <div className={styles.iframe}>
            <iframe
              title="Webview"
              style={{ width: "100%", height: "100%" }}
              srcDoc={text}
              frameborder="0"
            />
          </div>
        </div>
      ) : (
        <div>
          <CodeHeader
            setCode={setCode}
            setCompile={setCompile}
            setPublish={setPublish}
            handleSubmit={handleSubmit}
          />
          <div
            style={{
              borderLeft: "2px solid white",
              padding: "10px",
              fontFamily: "Vollkorn",
              fontSize: "20px",
              backgroundColor: "#06069a",
              color: "white",
            }}
          >
            <Slate
              editor={editor}
              value={title}
              onChange={(value) => {
                setTitle(value);
                const content = JSON.stringify(value);
                sessionStorage.setItem("codetitle", content);
              }}
            >
              <Editable />
            </Slate>
          </div>
          <textarea
            value={text}
            className={styles.textarea}
            onChange={(event) => {
              setText(event.target.value);
              sessionStorage.setItem("codetext", event.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Code;

{
  /* <div>
<div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
  }}
>
  <div style={{ marginRight: "10px" }}>{save}</div>
  <div style={{ marginRight: "10px" }}>
    <button
      className={styles.button}
      onClick={() => {
        setCompile(true);
      }}
    >
      {" "}
      Compile{" "}
    </button>
  </div>
  <div style={{ marginRight: "10px" }}>
    <button
      className={styles.button}
      onClick={() => {
        setPublish(false);
        handleSubmit();
      }}
    >
      {" "}
      Save{" "}
    </button>
  </div>
  <button
    className={styles.button}
    onClick={() => {
      setPublish(true);
      handleSubmit();
    }}
  >
    {" "}
    Publish{" "}
  </button>
</div> */
}
