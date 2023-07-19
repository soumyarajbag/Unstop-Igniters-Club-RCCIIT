import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/home/Intro'

import Aim from '../components/home/Aim'

import Featured from '../components/home/Featured'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Intro />
        <Aim />
        <Featured />
    </div>
  )
}

export default HomePage