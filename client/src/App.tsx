import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation } from "@apollo/client";
import CreateUser from "./component/create-user";

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  })
  return (
    <div>
    <ApolloProvider client={client}>
      <div className="">
        asdasd
        <CreateUser />
      </div>
    </ApolloProvider>
    </div>
  );
}

export default App;