import React , { useState, useEffect } from "react";
import ReactDOM  from "react-dom/client";
import axios from 'axios';
import { CartItems } from "./CartItems";


export const CartSummary = (props) => {
  const [cart, setCart] = useState(null);
  const [erro, setError] = useState(null);



  const cartRequest = () => {
    axios('/cart.js')
      .then(response => {
        console.log(response.data)
        setCart(response.data)
      })
      .catch(error => {
        console.error("Error fetching Data", error)
        setError(error)
      })
  }


  // Initialize the view
  useEffect(() => {
    cartRequest();
  }, [])

  // This effect is to trigger the cartRequest

  useEffect(() => {
    let addToCartButton = document.querySelector('.kris-product-form__submit');
    addToCartButton.addEventListener('click', () => { cartRequest() })

    return () => { addToCartButton.removeEventListener('click', () => { cartRequest() })}
  }, [cart])


  if(!cart) {return <p> loading....</p>}

  return(
        <div class="grid grid-cols-3 md-down:grid-cols-1 p-4">
          <div class="">
            <h2 class="text-center font-bold mb-4">{`My Cart (${cart.item_count} items: $ ${ cart.total_price / 100 })`}</h2>
            <CartItems lineItems={ cart.items }/>
          </div>
        </div>
  )


}

const root = ReactDOM.createRoot(document.getElementById('react-cart-summary'))
root.render(<CartSummary />)