import React, { Fragment } from "react";
import { Row, Col, Button, Input } from "antd";

const MyHeader = props => {
  const { title, handleLocationInput, getWeather } = props;

  return (
    <Fragment>
      <Row>
        <Col span={8}>
          <h1 style={{ color: "#fff" }}>{title}</h1>
        </Col>
        <Col span={4} offset={8}>
          <Input
            placeholder="Orlando, Florida"
            onChange={event => handleLocationInput(event.currentTarget.value)}
          />
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={getWeather}>
            Get Weather
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default MyHeader;
