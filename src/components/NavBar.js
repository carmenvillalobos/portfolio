import React, { Component, useState, useEffect } from "react";
import '../components/NavBar.css'

export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
  
    return (
      <nav>
        {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
        <li className="items">About Me</li>
        <li className="items">Projects</li>
        <li className="items">Skills</li>
        <li className="items">Experience</li>
      </ul>
        )}
  
        <button onClick={toggleNav} className="btn">BTN</button>
      </nav>
    )
  }