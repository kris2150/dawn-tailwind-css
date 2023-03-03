import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';


export const AlgoliaSearch = () => {

   // useEffect(() =>{
   //    alert('Hello Algolia')
   // })

   return(
    <div className="algoliaApp">
      <h1>Algolia Search</h1>
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('custom-search-filter'))

root.render(<AlgoliaSearch />)

