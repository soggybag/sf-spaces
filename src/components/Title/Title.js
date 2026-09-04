import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Title.module.css'

function Title() {
  return (
    <div className={styles.Title}>
      <header>
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>

        <div>
          <NavLink 
	className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
	to="/">List</NavLink>
<NavLink 
	className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
	to="/about">About</NavLink>
        </div>

      </header>
    </div>
  )
}

export default Title