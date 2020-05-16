import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <div>
        <div className={styles.title}>
          <a href="/about" style={{ fontSize: "40px" }}>
            {" "}
            Alibi{" "}
          </a>
        </div>
        <div className={styles.leftnav}>
          <div style={{ paddingBottom: "40px" }}></div>
          <Link to="/">Read/Play</Link>
          <hr
            style={{
              display: "block",
              border: 0,
              borderTop: "1px solid #000",
              padding: 0,
            }}
          />
          <Link to="/write-code">Write/Code</Link>
          <hr
            style={{
              display: "block",
              border: 0,
              borderTop: "1px solid #000",
              padding: 0,
            }}
          />
          <Link to="/signup-in">Sign Up/In</Link>
          <hr
            style={{
              display: "block",
              border: 0,
              borderTop: "1px solid #000",
              padding: 0,
            }}
          />
        </div>
        {user.id == 0 ? (
          <div></div>
        ) : (
          <div className={styles.bottomnav}>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid #000",
                padding: 0,
                margin: 0,
              }}
            />
            <Link to="/me-mine/:id ${user.id}">Me/Mine</Link>
          </div>
        )}
        <div className="divided">
          <span className="divider" />
          <span className="divider" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
