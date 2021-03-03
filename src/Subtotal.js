import React from 'react'
import './Subtotal.css'
import Currencyformat from 'react-currency-format'
import {useStateValue} from './StateProvider'
import { getBasketTotal } from './reducer'


export default function Subtotal() {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className="subtotal">
            <Currencyformat 

            renderText={(value)=>(
                <>
                    <p>
                    Total <strong>{basket.length}</strong> produits : <strong>{`${value} `}</strong>
                    </p>

                    <small className="subtotal__gift">
                        <input type="checkbox"/> Recevoir un cadeau
                    </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandseparator={true}
            prefix={"€"}
            
            />
            <button>Effectuer l'achat</button>
        </div>
    )
}
