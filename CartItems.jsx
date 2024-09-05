import React from 'react'
import { cartContext } from '../Context/CartContextProvider'

function CartItems() {
    const context = cartContext()

    function handleCartClick() {
        context.cartOpen()
    }

    function calc(price, cnt) {
        return Number(price) * Number(cnt)
    }

    function total() {
        let num = 0
        for(let i = 0; i < context.curItems.length; i++)
        {
        num = Number(num) + Number(context.curItems[i].cnt || 0) * Number(context.curItems[i].price)
        }
        return num
    }

  return (
    <>
        <div className={`cart-container ${context.isCartOpen ? '' : 'hide'}`}>
            <div className="cart-title">
                <div>Items in Cart</div>
                <div className="cart-cross" onClick={handleCartClick}></div>
            </div>
            <div className="cart-item-container">
                {context.curItems.map(item => {
                    return <div key={item.name} className='cart-items'>
                        <img src={item.src} alt="" />   
                        <div className='cart-items-name'>
                            <span>{item.name}</span>
                            <span>x{item.cnt || 1}</span>
                            <div>₹{item.price}</div>    
                        </div> 
                        <div className='cart-total'>
                            <div>₹{calc(item.price, item.cnt || 1)}</div>
                            <div>X</div>
                        </div>                 
                    </div>
                })} 
            </div>
            <div className='cart-grandTotal'>Total: ₹{total()}</div>
        </div>
    </>
  )
}

export default CartItems