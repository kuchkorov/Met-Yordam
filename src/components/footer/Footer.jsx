import React from 'react'
import './footer.css'

function Footer() {

  return (
    <div className='footer'>
        <div className="footer-content mb-5">
            <div className="footer-logo">
                <img src="img/logo/logo-removebg.png" alt="logo" />
                <span>Med Yordam</span>
                <p>Консультация от врачей</p>
            </div>
            <div className="footer-content-catalog">
                <div className="footer-content-catalog-title">
                    <span>Каталог услуг</span>
                </div>
                <div className="footer-content-catalog-list">
                    <ul>
                        <li>Медицинская консультация</li>
                        <li>Справочник лекарств</li>
                        <li>Справочник болезней</li>
                        <li>Справочник лекарств</li>
                        <li>Справочник Врачей и Клиник</li>
                    </ul>
                </div>
            </div>
            <div className="footer-Execute">
                <div className="footer-Execute-title">
                    <span>Выполнить</span>
                </div>
                <div className="footer-Execute-list">
                    <ul>
                        <li>Задать вопрос</li>
                        <li>Лучшие консультанты</li>
                        <li>Популярные вопросы</li>
                        <li>Регистрация</li>
                        <li>Вход в личный кабинет</li>
                    </ul>
                </div>
            </div>
            <div className="footer-project">
                <div className="footer-project-title">
                    <span>Проект</span>
                </div>
                <div className="footer-project-list">
                    <ul>
                        <li>Информация о проекте</li>
                        <li>Сотрудничество</li>
                        <li>Контакты для связи</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-info">
                <span>MedYordam 2024 - Все права защищены</span>
            </div>
            <div className="footer-bottom-info">
                <span>Обработка данных</span>
            </div>
            <div className="footer-bottom-info">
                <span>Условия использования</span>
            </div>
        </div>
    </div>
  )
}

export default Footer