import React from "react";
import classes from "./Preview.module.scss";
import Button from "../Buttons/Button";

const Preview = (props) => {
  return (
    <div className={classes.preview} style={{ backgroundColor: props.color }}>
      <img src={props.icon} alt={props.alt} className={classes.preview__icon} />
      <h1 className={classes.preview__title}>{props.title}</h1>
      <p className={classes.preview__description}>{props.description}</p>
      <Button color={props.color} />
    </div>
  );
};

export default Preview;
