import { connectHits } from "react-instantsearch-dom"




const Hits = ({ hits, handleAddProductToCart }) => (
  <div className="grid gap-4 grid-cols-3">
      {hits.map(hit => (
        <div>
          {/* { console.log(hit)} */}
          <a href={ "/products/" + hit.handle } key={hit.objectID}> 
            <img src={ hit.product_image } alt={ hit.product_image } />
          </a>
          <div className="grid grid-cols-2">
            <h3>{hit.title}</h3>
            <div className="text-right">
              <p >{hit.price}</p>
              <button className="px-4 py-2 bg-green-500 rounded-full" onClick={() => {
                let formData = {
                  'items': [{
                    quantity: 1,
                    id: hit.objectID
                  }]
                }

                alert(JSON.stringify(formData))

              } } >+</button>
            </div>
          </div>
        </div>
      ))}
  </div>
)




export const CustomHitCards = connectHits(Hits)