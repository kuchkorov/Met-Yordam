import React from 'react';
import './navbar.css';
import { IoLocationOutline, IoChevronDown  } from "react-icons/io5";

function Topnavbar() {
  return (
    <div className='top-nav-container'>
        <div className='location'>
            <div className="location-icon">
                <IoLocationOutline />
            </div>
            <div className="location-info">
                <h5>Ташкент</h5>
            </div>
            <div className="location-icon-down">
                <IoChevronDown />
            </div>
        </div>

        <div className='language'>
            <div className="language-flag">
                <img src="/img/russia.png" alt="rus" srcset="" />
            </div>
            <div className="location-info">
                <span>Язык: </span>
                <h5>Русский</h5>
            </div>
            <div className="location-icon-down">
                <IoChevronDown />
            </div>
        </div>
    </div>
  )
}

export default Topnavbar