import React, { useContext, useEffect, useState, useMemo } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
import styles from "./pages.module.css";
import Content from "../content/content";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [poems, setPoems] = useState();
  const [author, setAuthor] = useState();

  let history = useHistory();

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await fetch("http://localhost:5000/getuserpoems", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({ id: user.id }),
        });
        let db = await response.json();
        console.log(db[0]);
        if (db != null) {
          setPoems(db);
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

  return (
    <div style={{ marginLeft: "250px", marginTop: "15%", marginRight: "10%" }}>
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
      <div>
        {poems == null ? (
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
                {poems.map((p, i) => (
                  <div className={styles.flexGrid2}>
                    {p.published ? (
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
              <br />
              <br />
              <button className={styles.button}>Drafts</button>
              <br />
              <div className={styles.flexGrid2}>
                {poems.map((p, i) => (
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
    </div>
  );
};

export default withRouter(Profile);
