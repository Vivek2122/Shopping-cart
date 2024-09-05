import React from 'react'
import A from '../images/A.png'
import B from '../images/B.png'
import C from '../images/C.jpg'
import D from '../images/D.jpg'
import { cartContext } from '../Context/CartContextProvider'

export default function Store() {

    const context = cartContext()

    function handleCartClick(name, price, src) {
        context.addCurItems(name, price, src)
    }

  return (
    <>
        <h1>Store</h1>
        <div className="store-container">
            <div className='store-img-container'>
                <img src={A} alt="img" />
                <div className="store-img-container-title">
                    <div>Apples</div>
                    <div>₹80</div>
                </div>
                <button className='store-add-button' onClick={() => handleCartClick('Apples', 80, A)}>Add to cart</button>
            </div>
            <div className='store-img-container'>
                <img src={B} alt="img" />
                <div className="store-img-container-title">
                    <div>Biscuits</div>
                    <div>₹20</div>
                </div>
                <button className='store-add-button' onClick={() => handleCartClick('Biscuits', 20, B)}>Add to cart</button>
            </div>
            <div className='store-img-container'>
                <img src={C} alt="img" />
                <div className="store-img-container-title">
                    <div>Dumbels</div>
                    <div>₹1000</div>
                </div>
                <button className='store-add-button' onClick={() => handleCartClick('Dumbels', 1000, C)}>Add to cart</button>
            </div>
            <div className='store-img-container'>
                <img src={D} alt="img" />
                <div className="store-img-container-title">
                    <div>Pizza</div>
                    <div>₹800</div>
                </div>
                <button className='store-add-button' onClick={() => handleCartClick('Pizza', 800, D)}>Add to cart</button>
            </div>
        </div>
    </>
  )
}
