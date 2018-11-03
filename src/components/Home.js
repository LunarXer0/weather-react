import React, { Component, Fragment } from "react";
import { Row, Col, Button, Input } from "antd";

const Home = props => {
  return (
    <Fragment>
      <Row type="flex" justify="center" align="middle">
        <Col span={12}>
          <h1 style={{ textAlign: "center" }}>Enter a City and State</h1>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col span={4}>
          <Input placeholder="Orlando, Florida" />
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Button type="primary" style={{ marginTop: "15px" }}>
          Get Weather
        </Button>
      </Row>
    </Fragment>
  );
};

export default Home;
