import { connectHits } from "react-instantsearch-dom"


const Hits = ({ hits }) => (
  <div className="grid gap-4 grid-cols-3">
      {hits.map(hit => (
        <div>
          <a href={ "/products/" + hit.handle } key={hit.objectID}> 
            <img src={ hit.product_image } alt={ hit.product_image } />
          </a>
          <div className="grid grid-cols-2">
            <h3>{hit.title}</h3>
            <p class="text-right">{hit.price}</p>
          </div>
        </div>
      ))}
  </div>
)

export const CustomHitCards = connectHits(Hits)