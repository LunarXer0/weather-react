import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import MyHeader from "./header-component";
import Home from "./content-component";
import { getWeatherByCityAndCC, getForecastForFiveDays } from "../utils/api";

import "antd/dist/antd.css";

class App extends Component {
  state = {
    location: {
      city: "",
      countryCode: ""
    }
  };

  handleLocationInput = location => {
    let city, countryCode;
    if (location.includes(",")) {
      city = location.split(",")[0];
      countryCode = location.split(",")[1].trim();
    }
    if ((city !== "" || null) && (countryCode !== "" || null)) {
      this.setState({
        location: {
          city,
          countryCode
        }
      });
    }
  };

  getWeather = () => {
    getWeatherByCityAndCC(
      this.state.location.city,
      this.state.location.countryCode
    );
  };

  getFiveDayForecast = () => {
    getForecastForFiveDays(
      this.state.location.city,
      this.state.location.countryCode
    );
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
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    title="Enter a City and Country Code"
                    handleLocationInput={this.handleLocationInput}
                    getWeather={this.getWeather}
                    getFiveDayForecast={this.getFiveDayForecast}
                    city={this.state.location.city}
                    countryCode={this.state.location.countryCode}
                  />
                )}
              />
              <Route
                path="/forecast"
                render={() => <Home title="Five Day Forecast" />}
              />
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
