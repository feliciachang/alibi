import React, { useEffect, useState } from "react";
import { useParams, withRouter, useLocation } from "react-router-dom";
const contentful = require("contentful");

const Static = (props) => {
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    const getContent = async () => {
      let searchParams = new URLSearchParams(window.location.search);

      try {
        let id = searchParams.get("id");
        let response = await fetch(
          "https://alibi-backend.herokuapp.com/getonepoem",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify({ id: id }),
          }
        );
        let db = await response.json();
        if (db != null) {
          try {
            let response = await fetch(
              "https://alibi-backend.herokuapp.com/finduser",
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                method: "post",
                body: JSON.stringify({ id: db[0].userId }),
              }
            );
            let a = await response.json();
            setAuthor(a);
          } catch (error) {
            console.log(error);
          }

          setContent(db[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getContent();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "left",
        marginTop: "8%",
        marginBottom: "10%",
        marginLeft: "25vw",
        marginRight: "20vw",
      }}
    >
      {content != null ? (
        <div style={{ fontFamily: "Vollkorn" }}>
          <h1>{content.title[0].children[0].text}</h1>
          <div>
            {author.firstName} {author.lastName}
          </div>
          <br />
          <br />
          <div>
            {content.text[0].children.map((c, i) => (
              <div key={i}>{c.text}</div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h5> loading content </h5>
        </div>
      )}
    </div>
  );
};

export default withRouter(Static);
