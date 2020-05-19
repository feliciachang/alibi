import React, { useEffect, useState } from "react";
import { useParams, withRouter, useLocation } from "react-router-dom";
const contentful = require("contentful");

const Archive = (props) => {
  const [content, setContent] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getContent = async () => {
      let client = contentful.createClient({
        space: "zt0mvirckb5a",
        accessToken: "KkHd0KIkU7CWpGQ6ih1wagGPdt_JTqO31gJaQ4skQq4",
      });
      let searchParams = new URLSearchParams(window.location.search);

      let response = await client.getEntry(searchParams.get("id"));
      console.log(response.fields);

      setContent(response.fields);

      //   let asset = await client.getAsset("SwkqadbMXFiT0oKlgMwBl");
      //   console.log("cover photos", asset.fields.file.url);
      //   setPhoto('https:' + asset.fields.file.url);
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
          <h1>{content.title}</h1>
          <div>{content.author}</div>
          <br />
          <br />
          <div>
            {content.poetry.content.map((c, i) => (
              <div key={i}>{c.content[0].value}</div>
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

export default withRouter(Archive);
