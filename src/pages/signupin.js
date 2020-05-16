import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./pages.module.css";

import { UserContext } from "../UserContext";
import { withRouter } from "react-router-dom";

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
            <div
              style={{
                fontFamily: "Vollkorn",
                fontSize: "36px",
                color: "white",
              }}
            >
              {" "}
              Login{" "}
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                style={{
                  paddingTop: "15px",
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  backgroundColor: "#06069A",
                  borderBottom: "2px solid white",
                  width: "200px",
                  color: "white",
                  fontFamily: "fira mono",
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
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  backgroundColor: "#06069A",
                  borderBottom: "2px solid white",
                  width: "200px",
                  color: "white",
                  fontFamily: "fira mono",
                }}
                type="password"
                name="password"
                placeholder="Password"
                ref={register}
              />
            </label>
            <br />
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
      let response = await fetch("http://localhost:5000/signup", {
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
              color: "white",
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
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  backgroundColor: "#06069A",
                  borderBottom: "2px solid white",
                  width: "200px",
                  color: "white",
                  fontFamily: "fira mono",
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
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  backgroundColor: "#06069A",
                  borderBottom: "2px solid white",
                  width: "200px",
                  color: "white",
                  fontFamily: "fira mono",
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
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  backgroundColor: "#06069A",
                  borderBottom: "2px solid white",
                  width: "200px",
                  color: "white",
                  fontFamily: "fira mono",
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
                  paddingBottom: "5px",
                  border: "none",
                  fontSize: "15px",
                  backgroundColor: "#06069A",
                  borderBottom: "2px solid white",
                  width: "200px",
                  color: "white",
                  fontFamily: "fira mono",
                }}
                type="password"
                name="password"
                placeholder="Password"
                ref={register}
              />
            </label>
            <br />
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
    <div
      style={{
        marginLeft: "250px",
        marginTop: "5%",
        marginRight: "10%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "10%",
      }}
    >
      <div
        style={{
          padding: "50px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#06069A",
          width: "700px",
          minHeight: "600px",
        }}
      >
        <Login />
        <div style={{ paddingBottom: "60px", paddingRight: "100px" }} />
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpIn;
