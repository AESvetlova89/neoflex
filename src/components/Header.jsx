import React from 'react';
import s from '../styles/Header.module.css';
import like from './../images/Like.svg';
import cart from './../images/Cart.svg';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Header = () => {
    const count = useSelector(state => state.cart.cartItems.count)

    return (
        <header className={s.header}>
            <div className={s.logo_name}>
                <Link to={'/'}>QPICK</Link>
            </div>
            <div className={s.cart_like}>
                <div className={s.like}>
                    <img src={like} alt=""/>
                    <span className={s.count_like}>{1}</span>
                </div>
                <div className={s.cart}>
                    <Link to={'/cart'}>
                        <img src={cart} alt=""/>
                        <span className={s.count_cart}>{count}</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}


export default Header