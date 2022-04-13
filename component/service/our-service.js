import React from "react";
import classes from "./style/service.module.css";
import ServicePattern from "../../assets/ServicePattern";
import Service1 from "../../assets/service1";
import Service2 from "../../assets/service2";
import Service3 from "../../assets/service3";

function OurService() {
  const staticData = [
    {
      imgS: "",
    },
  ];

  return (
    <div className={classes.styleServices}>
      <div className={classes.oneService}>
        <div className={classes.patternStle}>
          <ServicePattern />
        </div>
        <div className={classes.service1Style}>
          <Service1 />{" "}
        </div>
        <h4>Business Applications</h4>
      </div>
      <div className={classes.oneService}>
        <div className={classes.patternStle}>
          <ServicePattern />
        </div>
        <div className={classes.service1Style}>
          <Service2 />{" "}
        </div>
        <h4>Implementation Services</h4>
      </div>
      <div className={classes.oneService}>
        <div className={classes.patternStle}>
          <ServicePattern />
        </div>
        <div className={classes.service1Style}>
          <Service3 />{" "}
        </div>
        <h4>E-Commerce Platforms</h4>
      </div>
    </div>
  );
}

export default OurService;
