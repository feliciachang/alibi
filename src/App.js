import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import P5Wrapper from 'react-p5-wrapper';
import Mailchimp from 'react-mailchimp-form'
import home from './sketches/home';
import sketch from './sketches/sketch';
import newyork from './sketches/newyork';
import mist from './sketches/mist';
import editionone from './sketches/editionone';
import home_mobile from './sketches/home_mobile';
import editionone_mobile from './sketches/editionone_mobile';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import DemoMobile from "./subscribe/subscribe_mobile";
import './App.css';

//<P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
//<P5Wrapper sketch={newyork} color={this.state.color}></P5Wrapper>

// <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
// <P5Wrapper sketch={mist} color={this.state.color}></P5Wrapper>
// <P5Wrapper sketch={newyork} color={this.state.color}></P5Wrapper>

// a basic form
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

class Demo extends Component {
  render() {
    const url =
      "https://gmail.us20.list-manage.com/subscribe/post?u=efcf53e5cc53e101735848444&amp;id=9d9a5c1f74";
    return (
      <div style= {{backgroundColor: '#FFF7E8', textAlign: "center"}}>
      <div style={{display: "inline-block"}}>
        <h1>Get notified when edition one releases</h1>
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
//
// class Subscribe extends Component {
//   render() {
//     return(
//       <div id="mc_embed_signup">
//       <form action="https://gmail.us20.list-manage.com/subscribe/post?u=efcf53e5cc53e101735848444&amp;id=9d9a5c1f74" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//           <div id="mc_embed_signup_scroll">
//             <h2>Subscribe</h2>
//             <div class="mc-field-group">
//             	<label for="mce-EMAIL">Email Address </label>
//             	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
//             </div>
//             <div id="mce-responses" class="clear">
//             		<div class="response" id="mce-error-response" style={{display:"none"}}></div>
//             		<div class="response" id="mce-success-response" style={{display:"none"}}></div>
//             </div>
//             <div aria-hidden="true">
//                 <input type="text" name="b_efcf53e5cc53e101735848444_9d9a5c1f74" tabindex="-1" value=""/>
//             </div>
//             <div class="clear">
//                 <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
//             </div>
//           </div>
//       </form>
//       </div>
//     )
//   }
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
    this.onClick = this.handleClick.bind(this);
  }


  handleClick(){
    if(this.state.num == 2){
      this.setState({num: 0})
    }
    else {
      this.setState({num: this.state.num + 1})
    }
  }

  switcher = (num) => {
    switch(this.state.num) {
      case 0:
        return(
          <div onClick={this.onClick}>
            <P5Wrapper sketch={home} color={this.state.color}></P5Wrapper>
            <P5Wrapper sketch={editionone} color={this.state.color}></P5Wrapper>
          </div>
        );
      case 1:
        return(
          <div onClick={this.onClick}>
            <P5Wrapper sketch={mist} color={this.state.color}></P5Wrapper>
            <P5Wrapper sketch={editionone} color={this.state.color}></P5Wrapper>
          </div>
        );
      case 2:
        return(
          <div onClick={this.onClick}>
            <P5Wrapper sketch={newyork} color={this.state.color}></P5Wrapper>
            <P5Wrapper sketch={editionone} color={this.state.color}></P5Wrapper>
          </div>
        );
    }
  }

  render() {
      if(window.innerWidth < 500) {
        return (
          <div style = {{backgroundColor: '#FFF7E8', paddingBottom: 40}}>
            <P5Wrapper sketch={home_mobile} color={this.state.color}></P5Wrapper>
            <P5Wrapper sketch={editionone_mobile} color={this.state.color}></P5Wrapper>
            <DemoMobile/>
          </div>
        )
      }
      else {
        return (
          <div style = {{backgroundColor: '#FFF7E8', paddingBottom: 40}}>
          <P5Wrapper sketch={home} color={this.state.color}></P5Wrapper>
          <P5Wrapper sketch={editionone} color={this.state.color}></P5Wrapper>
          <Demo/>
          </div>
        )
      }
  }
}
//return this.switcher(this.state.num)

export default App;
