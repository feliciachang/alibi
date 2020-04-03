import React, { useEffect, useState } from "react";
import {withRouter, useLocation, Redirect} from "react-router-dom";
import Content from "../content/content";
import styles from "./pages.module.css";

const contentful = require("contentful");

const StaticPoetry = (props) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const getContent= async () => {
            let client = contentful.createClient({
                space: "zt0mvirckb5a",
                accessToken: "KkHd0KIkU7CWpGQ6ih1wagGPdt_JTqO31gJaQ4skQq4"
              });

            let response = await client.getEntries('staticPoetry');
            console.log(response.items);
            setContent(response.items);

        }
        getContent();
    }, []) 

    return(
        <div className={styles.container}>
            <div style={{marginLeft: "14vw"}}>
            {
                content != null ? (
                    <div className={styles.flexGrid}>
                        {content.map((content, i) => (
                            <Content key = {i} title={content.fields.title} author={content.fields.author} mediaType={"static"} id={content.sys.id}/>
                        ))}
                    </div>
                ):(
                    <div>
                        <h5> loading content </h5>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default withRouter(StaticPoetry);