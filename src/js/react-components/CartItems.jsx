import React , { useState, useEffect } from 'react';



export const CartItems = ({lineItems}) => {
  const[cartItems, setCartItems] = useState(null);

  useEffect(() => {
    console.log('CartItems Component Mounted')
    // alert(JSON.stringify(lineItems))

  })
 
  if(!lineItems){ return <p>cart item loading...</p> }

  return(
    <div>
      {
        lineItems.map(item => {
          return(
            <div class="grid grid-cols-3">
              <div>
                <img src={ item.image } alt="" />
              </div>

              <div class="col-span-2 grid grid-cols-3">
                  <div class="col-span-2">
                    <h3 className="font-bold text-base">
                      { item.product_title }
                    </h3>
                    <p class="text-base pt-2">
                      Colon Cleanse & Gut Support 25.00% Off Auto renew Subscription
                      Deliver every 90 days
                    </p>
                  </div>
                  <div>
                    X(s)
                  </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )


}