import React, { useState, useContext } from "react";
import styles from "../pages.module.css";
import { compile } from "../compile.svg";

export const CodeHeader = ({
  setCode,
  setCompile,
  setPublish,
  handleSubmit,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#06069a",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <button
            className={styles.inversebutton}
            onClick={() => {
              setCode(false);
            }}
          >
            {" "}
            Write{" "}
          </button>
        </div>
        <button
          className={styles.inversebutton}
          onClick={() => {
            setCode(true);
          }}
        >
          {" "}
          Code{" "}
        </button>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 0 22 22"
            width="18"
            fill="white"
            onClick={() => {
              setCompile(false);
              console.log("clicked");
            }}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 22"
          width="18px"
          height="18px"
          fill="white"
          onClick={() => {
            setCompile(true);
            console.log("clicked");
          }}
        >
          <path d="M8 5v14l11-7z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <button
            className={styles.inversebutton}
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
          className={styles.inversebutton}
          onClick={() => {
            setPublish(true);
            handleSubmit();
          }}
        >
          {" "}
          Publish{" "}
        </button>
      </div>
    </div>
  );
};

export const WriteHeader = ({ setCode, setPublish, handleSubmit }) => {
  return (
    <div
      style={{
        backgroundColor: "#06069a",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "5%",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <button
            className={styles.inversebutton}
            onClick={() => {
              setCode(false);
            }}
          >
            {" "}
            Write{" "}
          </button>
        </div>
        <button
          className={styles.inversebutton}
          onClick={() => {
            setCode(true);
          }}
        >
          {" "}
          Code{" "}
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <button
            className={styles.inversebutton}
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
          className={styles.inversebutton}
          onClick={() => {
            setPublish(true);
            handleSubmit();
          }}
        >
          {" "}
          Publish{" "}
        </button>
      </div>
    </div>
  );
};
