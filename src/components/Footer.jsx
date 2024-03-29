import React, {useState} from 'react';
import s from '../styles/Footer.module.css';
import telegram from './../images/Telegram.svg';
import whatsapp from './../images/Whatsapp.svg';
import {Link, useLocation} from "react-router-dom";

const Footer = () => {
    const [activeElement, setActiveElement] = useState(1);
    const {pathname} = useLocation();

    const kazUrl = pathname === '/cart';


    const handleToggleElement = () => {
        if (kazUrl) {
            setActiveElement(activeElement === 3 ? 1 : activeElement + 1);
        } else {
            setActiveElement(activeElement === 1 ? 2 : 1)
        }
    };


    return (
        <footer className={s.footer}>
            <div className={s.logo_name}>
                <Link to={'/'} className={s.name}>QPICK</Link>
            </div>
            <div className={s.links}>
                
                <div className={s.second_column}>
                    
                    <div className={s.change_lang}> 
                        <div className={activeElement === 1 ? s.active : null}>Рус</div>
                        <div className={activeElement === 2 ? s.active : null}>Eng</div>
                    </div>
                </div>
            </div>
            <div className={s.social}>
                <a href="https://vk.com/a_svetlova_a" target={"_blank"} className={s.link_img}>
                    {/*Скинул еще одну ссылку на ВК, не нашел ссылку на WhatsApp)*/}
                    <img src={whatsapp} alt=""/>
                </a>
                <a href="https://t.me/Nastasya_Svetlova" target={"_blank"} className={s.link_img}>
                    <img src={telegram} alt=""/>
                </a>
            </div>
        </footer>
    )
}


export default Footer