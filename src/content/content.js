import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import styles from "./content.module.css";

const Content = (props) => {
  let history = useHistory();

  const redirect = (id, mediaType) => {
    console.log("redirecting");
    if (mediaType === "interactive") {
      console.log("redirecting interactive");
      history.push({
        pathname: "/interactive/" + id,
        search: "?id=" + id,
      });
    } else if (mediaType === "static") {
      console.log("redirecting static");
      history.push({
        pathname: "/archive/" + id,
        search: "?id=" + id,
      });
    } else if (mediaType === "heroku") {
      console.log("redirecting static");
      history.push({
        pathname: "/static/" + id,
        search: "?id=" + id,
      });
    }
  };

  return (
    <div
      onClick={() => redirect(props.id, props.mediaType)}
      className={styles.content}
    >
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
    </div>
  );
};

export default withRouter(Content);
