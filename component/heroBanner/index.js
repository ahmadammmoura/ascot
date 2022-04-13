import React from 'react'

import classes from "./style/hero.module.css"
import heroImage from "../../assets/Images/pexels-pavel-danilyuk-7658434.jpg"

function HeroBanner(props) {
  return (
    <div className={classes.hero}>
        <div className={classes.imageContainer}>
        <img src={heroImage.src} />
        </div>
        <h1>{props.title}</h1>
    </div>
  )
}

export default HeroBanner

{/* <img src={heroImage.src} /> */}