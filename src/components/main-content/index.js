import React from 'react'
import './maincontentstyle.css';
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

function Maincontent() {
  return (
    <div className='main-content'>
      <div className="left-content">
        <Leftcontent />
      </div>
      <div className="right-content">
        <Rightcontent />
      </div>
    </div>
  )
}

export default Maincontent