import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {useSelector, useDispatch} from "react-redux";
import {
    addItemToCart,
    deleteItemFromCart,
    removeItemFromCart
} from "../redux/cart-reducer";
import s from '../styles/Cart.module.css'
import Delete from './../images/delete.svg'
import Minus from './../images/Minus.svg'
import Plus from './../images/Plus.svg'
import headphone from '../images/headphones/444.png'

const Cart = () => {

    const { items: cartArr, totalPrice: price } = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    return (
        <div className={s.body}>
            <Header/>
            <div className={s.cart}>
                <div>
                <h2>Корзина</h2>
                {cartArr.map(el => {
                    return (
                        <div className={s.items}>
                            <div className={s.cart_item}>
                                <div className={s.item_info}>
                                    <div className={s.item_img}>
                                        <img src={el.img} alt=""/>
                                    </div>
                                    <div className={s.name_price}>
                                        <div>{el.title}</div>
                                        <div className={s.price_item}>{`${el.price} ₽`}</div>
                                    </div>
                                    <button onClick={() => {dispatch(deleteItemFromCart(el))}}
                                        className={s.delete}>
                                        <img src={Delete} alt=""/>
                                    </button>
                                </div>
                                <div className={s.change_price_count}>
                                    <div className={s.choose_amount}>
                                        <button onClick={() => {dispatch(removeItemFromCart(el))}}
                                            className={s.circle}>
                                            <img src={Minus} alt=""/>
                                        </button>
                                        <div>{el.amount}</div>
                                        <button onClick={() => {dispatch(addItemToCart(el))}
                                        }
                                            className={s.circle}>
                                            <img src={Plus} alt=""/>
                                        </button>
                                    </div>
                                    <div className={s.total_price_item}>
                                        {`${el.totalItemPrice} ₽`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className={s.total_price_container}>
                    <div className={s.total_price}>
                        <div>Итого</div>
                        <div>{`₽ ${price}`}</div>
                    </div>
                    <div className={s.decor}>
                        <button className={s.button_decor}>
                            Перейти к оформлению
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart;