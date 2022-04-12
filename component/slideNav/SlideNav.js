import React from 'react'
import Arrow from '../../assets/Arrow'
import styles from './style/slidenav.module.css'
function SlideNav() {
  return (
    <div className={styles.container}>
        <ul>
            <li><Arrow/></li>
            <li>About ascot</li>
            <li>Our services</li>
            <li>What’s different about ascot</li>
            <li>Our blog</li>
            <li>Our project</li>
            <li>Contact us</li>
        </ul>
    </div>
  )
}

export default SlideNav