import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import MyHeader from "./header-component";
import Home from "./Home";
import { getWeatherByCityAndCC } from "../utils/api";

import "antd/dist/antd.css";

class App extends Component {
  state = {
    location: ""
  };

  handleLocationInput = location => {
    this.setState({
      location
    });
  };

  getWeather = () => {
    const location = this.state.location;
    const city = location.split(",")[0];
    const countryCode = location.split(",")[1].trim();
    getWeatherByCityAndCC(city, countryCode);
  };

  render() {
    const { Header, Content } = Layout;
    return (
      <BrowserRouter>
        <Layout>
          <Header>
            <MyHeader
              title="Weather App"
              handleLocationInput={this.handleLocationInput}
              getWeather={this.getWeather}
            />
          </Header>
          <Content style={{ height: "100vh", paddingTop: "15px" }}>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  handleLocationInput={this.handleLocationInput}
                  getWeather={this.getWeather}
                />
              )}
            />
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
