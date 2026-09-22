import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Title.module.css'
import { useState, useEffect, useRef } from 'react'

function Title() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.Title}>
      <header>
      <div >

        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>
      
      </div>

      
        <button
          className="Title-menu-btn"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>hamburger</span>
          <span>fries</span>
          <span>milkshake</span>
          </button>

          <nav
            className={`Title-nav${menuOpen ? ' Title-nav--open' : ''}`}
            aria-hidden={!menuOpen}
          >
            <NavLink to="/" onClick={() => setMenuOpen(false)}>List</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          </nav>

      </header>
    </div>
  )
}

export default Title