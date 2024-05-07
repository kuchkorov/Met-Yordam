import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="img/logo/logo.png" alt="" />
                    <h4 className='logo-text'>Med Yordam</h4>
                    <span>Консультация <br /> от врачей</span>
                </div>
                <div className="nav-catalog">
                    <img src="img/nav-catalog.png" alt="catalog" />
                    <h4>Каталог услуг</h4>
                </div>
                <div className="nav-list">
                    <ul className='nav-list-item'>
                        <li>
                            <a>О проекте</a>
                        </li>
                        <li>
                            <a>Партнерство</a>
                        </li>
                        <li>
                            <a>Контакты</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-login">
                    <a href='#'>Вход / Регистрация</a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar