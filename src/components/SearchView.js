import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Row, Col, Input, Button } from "antd";

const SearchView = props => {
  const {
    handleLocationInput,
    getWeather,
    getFiveDayForecast,
    city,
    countryCode
  } = props;

  return (
    <Fragment>
      <Row type="flex" justify="center" align="middle">
        <Col span={6}>
          <Input
            placeholder="Orlando, US"
            onChange={event => handleLocationInput(event.currentTarget.value)}
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Link to={`/forecast?city=${city},${countryCode}`}>
          <Button
            type="primary"
            style={{ marginTop: "15px" }}
            onClick={getWeather}
          >
            Get Weather
          </Button>
        </Link>
      </Row>
    </Fragment>
  );
};

export default SearchView;
