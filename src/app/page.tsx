
import Hero from './components/Hero';
import React from 'react'
import styles from './styles/page.module.css';

const page = () => {
  return (
    <div>
      
      <h1 className={`${styles.heading}`}>homepage</h1>
      <Hero/>
    
    </div>
  )
}

export default page;

