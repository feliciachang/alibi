import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./pages.module.css";

import { UserContext } from "../UserContext";

const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState();

  const { user, setUser } = useContext(UserContext);

  const onSubmit = async (data) => {
    try {
      let response = await fetch("https://alibi-backend.herokuapp.com/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(data),
      });
      let users = await response.json();
      if (users.message === false) {
        setSuccess(false);
      } else {
        setSuccess(true);
        setUser(users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {success === true ? (
        <div>success!</div>
      ) : (
        <div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontFamily: "Vollkorn", fontSize: "36px" }}>
              {" "}
              Login{" "}
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                style={{
                  paddingTop: "15px",
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  borderBottom: "2px solid #757575",
                  backgroundColor: "#f9f9f9",
                }}
                type="text"
                name="email"
                placeholder="Email"
                ref={register}
              />
            </label>
            <br />
            <br />
            <label>
              <input
                style={{
                  paddingTop: "15px",
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  borderBottom: "2px solid #757575",
                  backgroundColor: "#f9f9f9",
                }}
                type="text"
                name="password"
                placeholder="Password"
                ref={register}
              />
            </label>
            <br />
            <br />
            <input className={styles.button} type="submit" />
          </form>
        </div>
      )}
    </div>
  );
};

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState();

  const { user, setUser } = useContext(UserContext);

  const onSubmit = async (data) => {
    try {
      let response = await fetch("https://alibi-backend.herokuapp.com/signup", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(data),
      });
      let users = await response.json();
      console.log(users.message);
      if (users.message) {
        setSuccess(true);
      } else {
        setSuccess(false);
        setUser(users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {success === true ? (
        <div>success!</div>
      ) : (
        <div>
          <div
            style={{
              fontFamily: "Vollkorn",
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Sign Up{" "}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                style={{
                  paddingTop: "15px",
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  borderBottom: "2px solid #757575",
                  backgroundColor: "#f9f9f9",
                }}
                type="text"
                name="firstName"
                placeholder="First Name"
                ref={register}
              />
            </label>
            <br />
            <br />
            <label>
              <input
                style={{
                  paddingTop: "15px",
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  borderBottom: "2px solid #757575",
                  backgroundColor: "#f9f9f9",
                }}
                type="text"
                name="lastName"
                placeholder="Last Name"
                ref={register}
              />
            </label>
            <br />
            <br />
            <label>
              <input
                style={{
                  paddingTop: "15px",
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  borderBottom: "2px solid #757575",
                  backgroundColor: "#f9f9f9",
                }}
                type="text"
                name="email"
                placeholder="Email"
                ref={register}
              />
            </label>
            <br />
            <br />
            <label>
              <input
                style={{
                  paddingTop: "15px",
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  borderBottom: "2px solid #757575",
                  backgroundColor: "#f9f9f9",
                }}
                type="text"
                name="password"
                placeholder="Password"
                ref={register}
              />
            </label>
            <br />
            <br />
            <input className={styles.button} type="submit" />
          </form>
        </div>
      )}
    </div>
  );
};

const SignUpIn = () => {
  return (
    <div className={styles.container}>
      <div
        style={{ marginTop: "10%", display: "flex", justifyContent: "center" }}
      >
        <Login />
        <div style={{ padding: "10%" }} />
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpIn;
