import React, { Fragment } from "react";
import { Row, Col, Button, Input } from "antd";

const MyHeader = props => {
  return (
    <Fragment>
      <Row>
        <Col span={8}>
          <h1 style={{ color: "#fff" }}>{props.title}</h1>
        </Col>
        <Col span={4} offset={8}>
          <Input placeholder="Orlando, Florida" />
        </Col>
        <Col span={4}>
          <Button type="primary">Get Weather</Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default MyHeader;
