import React, { useState, useContext } from "react";
import Code from "./submit/code-editor";
import Write from "./submit/write-editor";

import styles from "./pages.module.css";

import { UserContext } from "../UserContext";

const Submit = () => {
  const [code, setCode] = useState(false);
  const { user, setUser } = useContext(UserContext);
  console.log(code);

  // useEffect(() => {
  //   const checkStatus = () => {
  //     if (code == true) {
  //       setCode(true);
  //     }
  //   };
  //   checkStatus();
  // }, []);

  return (
    <div style={{ marginLeft: "250px", marginTop: "5%", marginRight: "10%" }}>
      {code ? <Code setCode={setCode} /> : <Write setCode={setCode} />}
    </div>
  );
};

export default Submit;
