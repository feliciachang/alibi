import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div
      style={{
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#06069A" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5, fontFamily: "Vollkorn", borderColor: '#06069A'}}
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5, fontFamily: "Vollkorn", borderColor: '#06069A' }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <br />
      <button style={{ fontSize: "2em", paddingLeft: 20, paddingRight: 20, paddingTop: 10, backgroundColor: '#06069A', color: '#FFF7E8', fontFamily: "Vollkorn"}} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

class DemoMobile extends Component {
  render() {
    const url =
      "https://gmail.us20.list-manage.com/subscribe/post?u=efcf53e5cc53e101735848444&amp;id=9d9a5c1f74";
    return (
      <div style= {{backgroundColor: '#FFF7E8', textAlign: "center"}}>
      <div style={{display: "inline-block"}}>
        <h3>Get notified when edition one releases</h3>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
      </div>
    );
  }
}

export default DemoMobile
