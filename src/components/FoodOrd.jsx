import React from 'react'
import FoodNav from './FoodNav'
import styles from '../components/styles/FoodOrd.css'
import axios from 'axios'
import baseUrl from '../BaseUrl'

const FoodOrd = () => {
    axios.post(baseUrl + "/product")
    
  return (
    <div>
       <FoodNav/>
       <main id="main">
        <select name="" id="about">
            
        </select>
       </main>
    </div>
  )
}

export default FoodOrd