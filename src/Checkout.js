import React from 'react'
import {useStateValue} from './StateProvider'
import './Checkout.css'
import Currencyformat from 'react-currency-format' 
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


export default function Checkout() {
    const [{basket}] = useStateValue()
    return (
        <div className="checkout">
            {basket.length > 0 && (
                <div className="checkout__right">
                   <Subtotal/>
                </div>
            )}
            <div className="checkout__left">
                
            
            <img className="checkout__ad" src="https://briffly.com/wp-content/uploads/Amazon-Prime-Day-banner.jpg" alt=""/>
            {basket?.length == 0 ? (
                <div>
                    <h2>Votre panier est vide</h2>
                    <p>Pour acheter un produit il suffit de cliquer sur acheter maintenant et regarder ensuite votre panier</p>
                </div>
            ) : (
                <div>
                   <h2 className="checkout__title">Votre panier d'achats</h2> 

                   {
                       basket?.map(item =>{
                          return(
                            <CheckoutProduct
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}

                           />
                          )
                       })
                   }
                </div>
            )}
            </div>
        </div>
    )
}
