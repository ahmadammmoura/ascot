import React from 'react'
import classes from "./style/service.module.css"
import ServicePattern from "../../assets/ServicePattern"
import Service1 from '../../assets/service1'

function OurService() {


    const staticData = [
        {
            imgS : ""
        }
    ]; 

  return (
    <div className={classes.styleServices}>
        <div className={classes.oneService}>
            <div className={classes.patternStle} ><ServicePattern /></div>
            <div className={classes.service1Style}><Service1 /> </div>
            <h4>Business Applications</h4>
        </div>

    </div>
  )
}

export default OurService