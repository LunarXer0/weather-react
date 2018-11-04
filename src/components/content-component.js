import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Input } from "antd";

import SearchView from "./SearchView";
import Forecast from "./Forecast";

const Home = props => {
  const {
    title,
    handleLocationInput,
    getWeather,
    getFiveDayForecast,
    city,
    countryCode
  } = props;
  return (
    <Fragment>
      <Row type="flex" justify="center" align="middle">
        <Col span={12}>
          <h1 style={{ textAlign: "center" }}>{title}</h1>
        </Col>
      </Row>
      {title === "Enter a City and Country Code" ? (
        <SearchView {...props} />
      ) : (
        <Forecast />
      )}
    </Fragment>
  );
};

export default Home;
