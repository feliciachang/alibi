import React, { useState, useMemo, useContext } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import styles from "./pages.module.css";

import { UserContext } from "../UserContext";

const Submit = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const editor2 = useMemo(() => withReact(createEditor()), []);
  const [success, setSuccess] = useState();
  const [save, setSave] = useState("");
  const [publish, setPublish] = useState(false);
  const [title, setTitle] = useState([
    {
      type: "title",
      children: [{ text: "Title" }],
    },
  ]);
  const [body, setBody] = useState([
    {
      type: "body",
      children: [{ text: "Poem" }],
    },
  ]);

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async () => {
    let staticJson;
    if (publish) {
      staticJson = {
        id: user.id,
        title: title,
        text: body,
        published: false,
      };
      try {
        let response = await fetch(
          "https://alibi-backend.herokuapp.com/publishpoem",
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
        console.log(poem.message);
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
        text: body,
        published: false,
      };
      console.log("trying to save");
      try {
        let response = await fetch(
          "https://alibi-backend.herokuapp.com/savepoem",
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
        console.log(poem.message);
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
    <div style={{ marginLeft: "250px", marginTop: "15%", marginRight: "10%" }}>
      {user.id === 0 ? (
        <div>log in first to submit :)</div>
      ) : (
        <div>
          {success === true ? (
            <div>Your poem was published!</div>
          ) : (
            <div>
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
              </div>

              <div
                style={{
                  borderLeft: "2px solid black",
                  padding: "10px",
                  fontFamily: "Vollkorn",
                  fontSize: "20px",
                }}
              >
                <Slate
                  editor={editor}
                  value={title}
                  onChange={(value) => setTitle(value)}
                >
                  <Editable />
                </Slate>
              </div>
              <br />
              <div
                style={{
                  borderLeft: "2px solid black",
                  padding: "10px",
                  fontFamily: "Vollkorn",
                  fontSize: "20px",
                }}
              >
                <Slate
                  editor={editor2}
                  value={body}
                  onChange={(value) => setBody(value)}
                >
                  <Editable />
                </Slate>
              </div>
              <br />
              <hr />
              <br />
              <div style={{ fontFamily: "Vollkorn" }}>Or submit by email</div>
              <div style={{ fontFamily: "Vollkorn" }}>
                We accept code by github or zip files!
              </div>
              <br />
              <button
                src="mailto:felicia.chang@yale.edu"
                className={styles.button}
              >
                Email Alibi
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Submit;
