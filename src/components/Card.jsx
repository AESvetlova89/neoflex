import React from 'react';
import s from '../styles/Card.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../redux/cart-reducer";

const Card = () => {
    const dispatch = useDispatch();

    const cards = useSelector(state => state.cart.cardsItems)

    return (
        <div>
            {Object.entries(cards).map(([key, value]) => (
                <div>
                    <h2 className={s.category} key={key}>{value.name}</h2>
                    <div className={s.cards}>
                        {value.data.map((el) => {
                            return (
                                <div className={s.card}>
                                    <div className={s.card_img}>
                                        <img src={el.img} alt=""/>
                                    </div>
                                    <div className={s.card_text}>
                                        <div className={s.text_price}>
                                            <div className={s.name_price}>
                                                <div className={s.card_name_product}>{el.title}</div>
                                                <div className={s.current_price}>{`${el.price} ₽`}</div>
                                            </div>
                                            {el.oldprice ?
                                                <span className={s.old_price}>{`${el.oldprice} ₽`}</span> : null}
                                        </div>
                                        <div className={s.star_buy}>
                                            
                                            <button onClick={() => dispatch(addItemToCart(el))}
                                                    className={s.buy}>Купить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Card