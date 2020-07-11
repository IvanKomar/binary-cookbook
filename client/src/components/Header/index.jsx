import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'>CookBook</h1>
      <nav><Link  className='header__link' to='/'>Home</Link></nav>
    </div>
  )
}
