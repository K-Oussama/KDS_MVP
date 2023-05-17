import React from 'react'
import Client from "@searchkit/instantsearch-client";
import Searchkit from "searchkit";
import { InstantSearch, SearchBox, Hits, RefinementList } from "react-instantsearch-dom";
import HitView from "../components/HitView.jsx";

const Logs = () => {
    const sk = new Searchkit({
        connection: {
          host: import.meta.env.VITE_ELASTIC_SEARCH_HOST,
          // if you're authenticating with username/password
          // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-usernamepassword
          auth: {
            username: import.meta.env.VITE_ELASTIC_SEARCH_USER,
            password: import.meta.env.VITE_ELASTIC_SEARCH_PASS
          },
          // if you're authenticating with api key
          // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-api-key
          // apiKey: "######"
        },
        search_settings: {
            search_attributes: [{fields: 'message', weight: 3}, "level", 'filename'],
            // result_attributes: ['message', '@timestamp', 'filename'],
            result_fields: ['*'],
            sorting: {
                field: '@timestamp',
                order: 'desc'
            }
        },
      })
       
      const searchClient = Client(sk);
  return (
    <InstantSearch indexName={import.meta.env.VITE_ELASTIC_SEARCH_INDEX} searchClient={searchClient}>
        <SearchBox />
        <Hits hitComponent={HitView} />
    </InstantSearch>
  )
}

export default Logs