import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from 'react-router-dom';
import "./content.css"

const Content = (props) => {

    let history = useHistory();

    const redirect = () => {
      history.push({
        pathname:"/interactive/" + props.id,
        search: '?id=' + props.id
      })
    }

    return(
        <div onClick={() => redirect(props.id)} className="content">
            <h1>
              {props.title}  
            </h1>
            <h3>
              {props.author} 
            </h3>
        </div>
    )
}

export default withRouter(Content);