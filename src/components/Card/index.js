import React from "react";
import "./style.css";

function Card(props) {
    return <img className="card float-left ml-3 mb-3" alt="" src={props.url}></img>
}

export default Card;