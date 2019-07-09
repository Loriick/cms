import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import App from "./pages/Home/App";
import Post from "./pages/Post";
import Menu from "./components/Menu";
import AddPost from "./pages/AddPost";

//style
import "antd/dist/antd.css";

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/"
});

function Root() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Menu />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/post/:_id" component={Post} />
          <Route path="/add" component={AddPost} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
