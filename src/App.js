import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import MyHeader from "./components/header-component";
import Home from "./components/Home";

import "antd/dist/antd.css";

class App extends Component {
  render() {
    const { Header, Content } = Layout;
    return (
      <BrowserRouter>
        <Layout>
          <Header>
            <MyHeader title="Weather App" />
          </Header>
          <Content style={{ height: "100vh", paddingTop: "15px" }}>
            <Route exact path="/" component={Home} />
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
