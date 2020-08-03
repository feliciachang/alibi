import React, { useState, useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styles from "./content.module.css";
import { userContext } from "../UserContext";

const Dropdown = (props) => {
  let history = useHistory();
  const Publish = async () => {
    try {
      let staticJson = {
        id: props.id,
        publish: true,
      };
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
    } catch (error) {
      console.log(error);
    }
  };

  const UnPublish = async () => {
    try {
      let staticJson = {
        id: props.id,
        publish: false,
      };
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
    } catch (error) {
      console.log(error);
    }
  };

  const Delete = async (props) => {
    try {
      let response = await fetch(
        "https://alibi-backend.herokuapp.com/deletepoem",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({ id: props.id }),
        }
      );
      let poem = await response.json();
      console.log(poem.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "fira mono",
        fontSize: "13px",
        boxShadow: "2px 2px 10px 2px #ccc",
        borderRadius: "5px",
      }}
    >
      {props.publish == true ? (
        <div onClick={() => UnPublish()}>Un-publish</div>
      ) : (
        <div onClick={() => Publish()}>Publish</div>
      )}
      <div
        onClick={() => {
          history.push({
            pathname: "/write-code",
          });
        }}
      >
        Edit
      </div>
      <div onClick={() => Delete()}>Delete</div>
    </div>
  );
};

const EditContent = (props) => {
  const [dropdown, setDropdown] = useState(false);
  let history = useHistory();

  const redirect = (id) => {
    history.push({
      pathname: "/static/" + id,
      search: "?id=" + id,
    });
  };

  const toggleDropdown = () => {
    if (dropdown == true) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  return (
    <div>
      {dropdown ? (
        <div style={{ zIndex: 1 }}>
          <Dropdown publish={props.publish} id={props.id} />
        </div>
      ) : (
        <div />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div onClick={() => toggleDropdown()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="18px"
            height="18px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
        <div
          onClick={() => redirect(props.id, props.mediaType)}
          className={styles.content}
        >
          <h1>{props.title}</h1>
          <h3>{props.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditContent);
