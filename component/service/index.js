import React from 'react'
import OurService from './our-service'
import classes from "./style/service.module.css"

function Service() {
  return (
    <div className={classes.service}>
        <div className={classes.title}>
            <h1>
            OUR BEST SERVICES THAT WE <br /> OFFERING TO YOU
            </h1>
        </div>
        <OurService />
    </div>
  )
}

export default Service