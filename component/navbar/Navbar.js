import React from 'react'
import Logo from '../../assets/Logo';
import Search from '../../assets/Search';
import styles from './style/navbar.module.css';



function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo/>
      </div>
 
      <div className={styles.navContainer}>
        <nav>
            <li>HOME PAGE</li>
            <li>ABOUT US</li>
            <li>PRODUCTS</li>
            <li>SERVICES</li>
            <li>PROJECTS</li>
            <li>BLOGS</li>
            <li>عربي</li>    
        </nav>

        <div className={styles.search}>
          <Search/>
        </div>

        <div className={styles.request}>
          <h2>Request A Quote</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar