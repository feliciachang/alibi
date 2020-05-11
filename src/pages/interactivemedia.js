import React from "react";
import styles from "./pages.module.css";
import Content from "../content/content";

const InteractiveMedia = () => {
  return (
    <div className={styles.container}>
      <div style={{ marginLeft: "14vw" }}>
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
  );
};

export default InteractiveMedia;
