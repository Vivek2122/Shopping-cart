import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import A from '../images/A.png'
import B from '../images/B.png'
import C from '../images/C.jpg'
import D from '../images/D.jpg'

const CartContext = createContext()

function CartContextProvider({ children }) {

  const [curItems, setCurItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  function cartOpen() {
    setIsCartOpen(!isCartOpen)
  }

  function addCurItems(name, price, src) {
    if(curItems.find(item => item.name == name) == null) {
      setCurItems([...curItems, {
        name: name,
        cnt: 1,
        price: Number(price), 
        src: src
      }])
    }
    else {
      setCurItems(curItems.map(item => {
        if(item.name == name){
          item.cnt = Number(item.cnt) + 1
          return item
        }
        else return item
      }))
    }
  }

  let cart = {
    items: [
      {
        name: 'Apples',
        cnt: 0,
        price: 80,
        src: A
      },
      {
        name: 'Biscuits',
        cnt: 0,
        price: 20,
        src: B
      },
      {
        name: 'Dumbels',
        cnt: 0,
        price: 1000,
        src: C
      },
      {
        name: 'Pizza',
        cnt: 0,
        price: 800,
        src: D
      }
    ],
    isCartOpen: isCartOpen,
    curItems: curItems,
    cartOpen: cartOpen,
    addCurItems: addCurItems
  }

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}

export const cartContext = () => {
  return useContext(CartContext)
}

export default CartContextProvider