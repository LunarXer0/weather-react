import React, { Fragment } from "react";
import { Row, Col, Button, Input } from "antd";

const Home = props => {
  const { handleLocationInput, getWeather } = props;
  return (
    <Fragment>
      <Row type="flex" justify="center" align="middle">
        <Col span={12}>
          <h1 style={{ textAlign: "center" }}>Enter a City and State</h1>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col span={4}>
          <Input
            placeholder="Orlando, FL"
            onChange={event => handleLocationInput(event.currentTarget.value)}
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Button
          type="primary"
          style={{ marginTop: "15px" }}
          onClick={getWeather}
        >
          Get Weather
        </Button>
      </Row>
    </Fragment>
  );
};

export default Home;
