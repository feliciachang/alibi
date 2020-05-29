import React, { useState, useMemo, useContext, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { WriteHeader } from "./header";

import { UserContext } from "../../UserContext";
import { useStaticRendering } from "mobx-react";

const Write = ({ setCode }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const editor2 = useMemo(() => withReact(createEditor()), []);
  const [success, setSuccess] = useState();
  const [save, setSave] = useState("");
  const [publish, setPublish] = useState(false);
  const { user, setUser } = useContext(UserContext);
  let history = useHistory();

  const [title, setTitle] = useState(
    JSON.parse(sessionStorage.getItem("title")) || [
      {
        type: "title",
        children: [{ text: "Title" }],
      },
    ]
  );
  const [body, setBody] = useState(
    JSON.parse(sessionStorage.getItem("body")) || [
      {
        type: "body",
        children: [{ text: "Poem" }],
      },
    ]
  );

  console.log(body);
  const handleSubmit = async () => {
    if (user.id == 0) {
      history.push({
        pathname: "/signup-in",
      });
    } else {
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
          if (poem.message === true) {
            setSuccess(true);
            history.push({ pathname: "/me-mine" + user.id });
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
        console.log("static json", staticJson);
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
          console.log("poem message", poem.message);
          if (poem.message === true) {
            setSave("Saved!");
            history.push({ pathname: "/me-mine/:id ${user.id}" });
          } else {
            setSave(poem.message);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  //this will need to redirect to the actual poem
  return (
    <div>
      {success === true ? (
        <div>Your poem was published!</div>
      ) : (
        <div>
          <WriteHeader
            setCode={setCode}
            setPublish={setPublish}
            handleSubmit={handleSubmit}
          />
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
              onChange={(value) => {
                setTitle(value);
                const content = JSON.stringify(value);
                sessionStorage.setItem("title", content);
              }}
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
              onChange={(value) => {
                setBody(value);
                const content = JSON.stringify(value);
                sessionStorage.setItem("body", content);
              }}
            >
              <Editable />
            </Slate>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Write);
