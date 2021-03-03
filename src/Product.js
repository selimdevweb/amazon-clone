import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

export default function Product({id, title, price, rating, image}) {
    const [{}, dispatch] = useStateValue()
    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
            id: id,
            title: title,
            image:image,
            price:price,
            rating:rating,
        },
        })
    }
    
    return (
        <div className="product">
            <img src={image} alt={id}/>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>€</small>
                <strong key={id} >{price}</strong>
                </p>
                <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>
                    (<p>⭐</p>)
                        
                    )
                }
            </div>
            </div>
            <button onClick={addToBasket}>Ajouter au panier</button>
        </div>
    )
}
