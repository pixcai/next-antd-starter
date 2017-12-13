import React from 'react'
import { Row, Col } from 'antd'

export default class Header extends React.Component {

  render() {
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col>Welcome to next-antd-starter</Col>
      </Row>
    )
  }
}
