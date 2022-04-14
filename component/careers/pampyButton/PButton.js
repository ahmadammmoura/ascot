import Image from "next/image";
import React from "react";
import classes from "./Pbutton.module.css";
import arrow from "../../../assets/Icons/Vector.svg";

export const PButton = () => {
  return (
    <div className={classes.circleContainer}>
      <Image className={classes.arrow} src={arrow} width={13} height={11} />
    </div>
  );
};
