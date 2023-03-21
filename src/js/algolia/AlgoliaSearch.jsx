import algoliasearch from 'algoliasearch';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { InstantSearch, SearchBox, RefinementList, SortBy, Panel } from 'react-instantsearch-dom';
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
               <SortBy 

                  defaultRefinement='shopify_products'
                  items={
                     [
                        {label: 'Featured', value: 'shopify_products'},
                        {label: 'Price (asc)', value: 'shopify_product_price_asc'}
                     ]
                  }
               />

               <hr />

               <Panel header="Types">
                  <RefinementList attribute="product_type"/>
               </Panel>

               <h3>Colors</h3>
               <RefinementList attribute="option_names"/>
               <h3>Vendor</h3>
               <RefinementList attribute="vendor"/>

            </div>

            <div class="col-span-4">
               <div className="grid grid-cols-1">

                  
                  <CustomHitCards handleAddProductToCart={handleAddProductToCart}/>

               </div>
            </div>
         </div>

      </InstantSearch>

   </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('algolia-container'))

root.render(<AlgoliaSearch />)

