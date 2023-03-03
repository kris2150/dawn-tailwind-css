import React from "react";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";


// this is an already configured searchClient for example sake but 
// these can be found on the dashboard
const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76")

export const Search = () => {
  return(
    <InstantSearch searchClient={searchClient} indexName={movies}>
      
    </InstantSearch>
  );
}