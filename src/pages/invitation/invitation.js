import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory, withRouter } from "react-router-dom";
import { InviteContext } from "../../UserContext";

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;

const Alibi = styled.div`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  color: #06069a;
  font-size: 6vw;
  font-family: Vollkorn;
  padding: 100px;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

const Des = styled.div`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  font-size: 50px;
  font-family: Vollkorn;
  color: #06069a;
`;

const Circle = styled.div`
  position: absolute;
  background-color: #06069a;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
`;

const Invitation = () => {
  const [random, setRandom] = useState(null);
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [input, setInput] = useState("");
  const [fail, setFail] = useState(false);
  let history = useHistory();
  const { invite, setInvite } = useContext(InviteContext);

  useEffect(() => {
    let temp = [];
    let height = window.innerHeight / 2;
    console.log("height", height);
    let width = window.innerWidth - 100;
    for (let i = 0; i < 5; i++) {
      let x = width / 5;
      temp.push([
        Math.floor(Math.random() * x + i * x),
        Math.floor(Math.random() * height),
      ]);
    }
    console.log("temp", temp);
    setRandom(temp);
  }, [window.innerWidth, window.innerHeight]);

  const confirmInvitation = async () => {
    let response = await fetch(
      "https://alibi-backend.herokuapp.com/confirminvitation",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ code: input }),
      }
    );
    let db = await response.json();
    console.log("db message", db.message);
    if (db.message == true) {
      setInvite("true");
      sessionStorage.setItem("code", "true");
      history.push({ pathname: "/" });
    } else {
      setFail(true);
    }
  };

  const getX = (i) => {
    let width = window.innerWidth;
    let x = width / 5 - 30;
    return Math.floor(Math.random() * x + i * x + 10);
  };

  const getY = () => {
    let width = window.innerWidth;
    return Math.floor(Math.random() * window.innerHeight);
  };

  let A = (
    <div>
      {showA ? (
        <div>
          <Des x={getX(0)} y={getY(0)}>
            open
          </Des>
          <Des x={getX(1)} y={getY(1)}>
            &amp; &amp; &amp;
          </Des>
          <Des x={getX(3)} y={getY(3)}>
            &amp; &amp; &amp;
          </Des>
          <Des x={getX(2)} y={getY(2)}>
            collaborative
          </Des>
          <Des x={getX(3)} y={getY(3)}>
            &amp; &amp; &amp;
          </Des>
          <Des x={getX(4)} y={getY(4)}>
            interactive
          </Des>
          <Des x={getX(5)} y={getY(5)}>
            &amp; &amp; &amp;
          </Des>
        </div>
      ) : (
        <div />
      )}
    </div>
  );

  let B = (
    <div>
      {showB ? (
        <div>
          <Circle x={getX(0)} y={getY(0)} />
          <Circle x={getX(1)} y={getY(1)} />
          <Circle x={getX(2)} y={getY(2)} />
          <Circle x={getX(3)} y={getY(3)} />
          <Circle x={getX(4)} y={getY(4)} />
          <Circle x={getX(5)} y={getY(5)} />
        </div>
      ) : (
        <div />
      )}
    </div>
  );

  let C = (
    <div>
      {showC ? (
        <div>
          <Des x={getX(0)} y={getY(0)}>
            read for play
          </Des>
          <Des x={getX(1)} y={getY(1)}>
            <div style={{ fontWeight: "bold" }}>///</div>
          </Des>
          <Des x={getX(3)} y={getY(3)}>
            <div style={{ fontWeight: "bold" }}>///</div>
          </Des>
          <Des x={getX(2)} y={getY(2)}>
            play to read
          </Des>
          <Des x={getX(3)} y={getY(3)}>
            read for play
          </Des>
          <Des x={getX(4)} y={getY(4)}>
            play to read
          </Des>
          <Des x={getX(5)} y={getY(5)}>
            <div style={{ fontWeight: "bold" }}>///</div>
          </Des>
        </div>
      ) : (
        <div />
      )}
    </div>
  );

  return (
    <div>
      {random != null ? (
        <div>
          <div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 3,
                fontFamily: "fira mono",
                display: "flex",
                flexDirection: "vertical-align",
                justifyContent: "baseline",
              }}
            >
              <input
                style={{
                  paddingTop: "15px",
                  paddingBottom: "5px",
                  paddingLeft: "5px",
                  border: "none",
                  fontSize: "15px",
                  border: "2px solid #06069A",
                  width: "200px",
                  fontFamily: "fira mono",
                }}
                type="email"
                name="invitation code"
                placeholder="invitation code"
                onChange={(e) => {
                  setShowA(true);
                  setInput(e.target.value);
                }}
                value={input}
              />
              <button
                style={{
                  border: "none",
                  backgroundColor: "#06069A",
                  color: "white",
                  fontFamily: "fira mono",
                  paddingTop: "9px",
                  fontSize: "15px",
                }}
                onClick={() => confirmInvitation()}
              >
                Submit
              </button>
            </div>
            <Alibi
              onMouseEnter={() => setShowA(true)}
              onMouseLeave={() => setShowA(false)}
              pad={window.innerWidth / 5}
              x={random[0][0]}
              y={random[0][1]}
            >
              A
            </Alibi>
            <Alibi
              onMouseEnter={() => setShowB(true)}
              onMouseLeave={() => setShowB(false)}
              pad={window.innerWidth / 5}
              x={random[1][0]}
              y={random[1][1]}
            >
              L
            </Alibi>
            <Alibi
              onMouseEnter={() => setShowC(true)}
              onMouseLeave={() => setShowC(false)}
              pad={window.innerWidth / 5}
              x={random[2][0]}
              y={random[2][1]}
            >
              I
            </Alibi>
            <Alibi
              onMouseEnter={() => setShowA(true)}
              onMouseLeave={() => setShowA(false)}
              pad={window.innerWidth / 5}
              x={random[3][0]}
              y={random[3][1]}
            >
              B
            </Alibi>
            <Alibi
              onMouseEnter={() => setShowB(true)}
              onMouseLeave={() => setShowB(false)}
              pad={window.innerWidth / 5}
              x={random[4][0]}
              y={random[4][1]}
            >
              I
            </Alibi>
          </div>
          {A}
          {B}
          {C}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default withRouter(Invitation);
