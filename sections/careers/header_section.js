import React from "react";
import HeaderText from "../../component/careers/header_text/HeaderText";
import Overlaying_divs from "../../component/careers/overlaying_divs/overlaying_divs";
import classes from "../careers/styles/styles.module.css";
const HeaderSection = () => {
  return (
    <div className={classes.headerContainer}>
      <Overlaying_divs />
      <HeaderText />
    </div>
  );
};

export default HeaderSection;
