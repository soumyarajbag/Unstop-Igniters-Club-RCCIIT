import React from 'react'
import logo from '../../assets/logo.jpg';
const CellCard = () => {
  return (
    <div>
        <div>
            <img src={logo} alt="" />
            <h1>Example Cell</h1>
            <h1>Members : 30+</h1>
        </div>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quae dolores? Adipisci.</p>
        </div>
    </div>
  )
}

export default CellCard