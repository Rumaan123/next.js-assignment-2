import Link from 'next/link';
import React from 'react';
import style from "../styles/Header.module.css";
const Header = () => {
  return (
   <div>
     <div className={`${style.header}`}>
      <h1>Header</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/services">Services</Link></li>
      </ul>

    </div>
   </div>
  )
}

export default Header
