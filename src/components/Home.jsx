import React from 'react'
import bg from '../assets/bg.jpg'
import Products from './Products'
function Home() {
  return (
    <div className='hero'>
    <div className="card text-black bg-dark border-0">
  <img src={bg} className="card-img" alt="Background" height="550px"/>
  <div className="card-img-overlay d-flex flex-column ">
  <div className='container'>
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-subtitle lead fs-2">CHECK OUT ALL THE TRENDS</p>
   
    </div>
  </div>
</div> 
<Products/>   
    </div>
  )
}

export default Home
