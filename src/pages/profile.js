import React, { useContext, useEffect, useState, useMemo } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
import styles from "./pages.module.css";
import styled from "styled-components";
import Content from "../content/content";

const ProfileBody = ({ content, author }) => {
  let history = useHistory();
  return (
    <div>
      {content == null ? (
        <div>
          <p>publish your first piece</p>
          <button
            className={styles.button}
            onClick={() =>
              history.push({
                pathname: "/write-code",
              })
            }
          >
            write/code
          </button>
        </div>
      ) : (
        <div>
          <div>
            <button className={styles.button}>Published</button>
            <div className={styles.flexGrid2}>
              {content.map((p, i) => (
                <div className={styles.flexGrid2}>
                  {p.published ? (
                    <Content
                      key={i}
                      title={p.title[0].children[0].text}
                      text={p.text}
                      author={author}
                      id={p.id}
                      mediaType={"heroku"}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
            <br />
            <br />
            <button className={styles.button}>Drafts</button>
            <br />
            <div className={styles.flexGrid2}>
              {content.map((p, i) => (
                <div className={styles.flexGrid2}>
                  {p.published === false ? (
                    <Content
                      title={p.title[0].children[0].text}
                      text={p.text}
                      author={author}
                      id={p.id}
                      mediaType={"heroku"}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Toggle = styled.div`
  background-color: ${(props) =>
    props.active ? "rgb(220, 220, 220)" : "white"};
  font-size: 13px;
  font-family: fira mono;
  margin-right: 30px;
  padding: 5px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 10px 10px 0px 0px;
`;

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [poems, setPoems] = useState();
  const [code, setCode] = useState();
  const [author, setAuthor] = useState();
  const [active, setActive] = useState([true, false]);
  console.log(active);

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await fetch(
          "https://alibi-backend.herokuapp.com/getuserpoems",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify({ id: user.id }),
          }
        );
        let db = await response.json();
        console.log(db[0]);
        if (db != null) {
          setPoems(db);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        let response = await fetch(
          "https://alibi-backend.herokuapp.com/getusercode",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify({ id: user.id }),
          }
        );
        let db = await response.json();
        console.log(db[0]);
        if (db != null) {
          setCode(db);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getAuthor = () => {
      let temp = "";
      temp.concat(user.firstName, user.lastName);
      setAuthor(temp);
    };

    getProfile();
    getAuthor();
  }, []);

  const toggleActive = () => {
    if (active[0] == true) {
      setActive([false, true]);
    } else {
      setActive([true, false]);
    }
  };

  return (
    <div style={{ marginLeft: "250px", marginTop: "70px", marginRight: "10%" }}>
      <div
        style={{
          fontFamily: "Vollkorn",
          fontSize: "36px",
        }}
      >
        {user.firstName} {user.lastName}
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
        }}
      >
        <Toggle active={active[0]} onClick={() => toggleActive()}>
          Writing
        </Toggle>
        <Toggle active={active[1]} onClick={() => toggleActive()}>
          Code
        </Toggle>
      </div>
      <hr
        style={{
          display: "block",
          border: 0,
          borderTop: "1px solid rgb(220, 220, 220)",
          padding: 0,
          margin: 0,
        }}
      />
      <br />
      <br />
      {active[0] ? (
        <ProfileBody content={poems} author={author} />
      ) : (
        <ProfileBody content={code} author={author} />
      )}
    </div>
  );
};

export default withRouter(Profile);
