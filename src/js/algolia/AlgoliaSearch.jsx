import algoliasearch from 'algoliasearch';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { InstantSearch, SearchBox, RefinementList } from 'react-instantsearch-dom';
import { CustomHitCards } from './components/AlgoliaHits';
import { Search } from './components/Search';

const searchClient = algoliasearch('DMCWZLP909', '6d166fec56fc3a3b6eefb3ec143ecfa7')


export const AlgoliaSearch = () => {

   return( 
   <div>
      <InstantSearch 
            searchClient = { searchClient }
            indexName="shopify_products">

         <header>
            <SearchBox translations={{ placeholder: 'Enter your search terms'}}></SearchBox>
         </header>
         

         <div class="grid grid-cols-5 mx-[4rem]">
            <div>
               <h3>Types</h3>
               <RefinementList attribute="product_type"/>
               <h3>Colors</h3>
               <RefinementList attribute="option_names"/>
            </div>

            <div class="col-span-4">
               <div className="grid grid-cols-1">

                  
                  <CustomHitCards />

               </div>
            </div>
         </div>

      </InstantSearch>
      // <h1>Algolia Search</h1>

   </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('algolia-container'))

root.render(<AlgoliaSearch />)

