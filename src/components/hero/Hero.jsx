import React from 'react'
import { FaRegStar } from "react-icons/fa";
import './hero.css'

function Hero() {
  return (
    <div className='hero-container'>
        <div className="hero-content">
            <div className="hero-content-btn text-center">
                <span>Консультация от врачей</span>
            </div>
            <div className="hero-content-info">
                <p>Получайте бесплатную консультацию от лучших специалистов</p>
            </div>
            <div className="hero-short-info text-center">
                <div className="hero-short-info-box">
                    <img src="img/star.png" alt="star" />
                    <span>Лучшие консультанты</span>
                </div>
                <div className="hero-short-info-box">
                    <img src="img/question.png" alt="star" />
                    <span>Задать вопрос</span>
                </div>
                <div className="hero-short-info-box">
                    <img src="img/pop-question.png" alt="star" />
                    <span>Популярные вопросы</span>
                </div>
            </div>
        </div>
        <div className="hero-stat">
            {/* <div className="dark-overlay"> */}
                <div className="hero-stat-box">
                    <span>+1 000</span>
                    <p>Врачей различных специализаций</p>
                </div>
                <div className="hero-stat-box">
                    <span>24/7</span>
                    <p>Доступ к медицинской помощи</p>
                </div>
                <div className="hero-stat-box">
                    <span>+ 95%</span>
                    <p>Положительных отзывов</p>
                </div>
                <div className="hero-stat-box">
                    <span>+20 000</span>
                    <p>Анкет пользователей</p>
                </div>  
            {/* </div> */}
        </div>
    </div>
  )
}

export default Hero