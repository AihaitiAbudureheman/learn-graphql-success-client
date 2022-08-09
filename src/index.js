import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import GlobalStyles from "./styles";
import Pages from "./pages";

const client = new ApolloClient({
  uri: "https://full-stack-graph-app.herokuapp.com/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
