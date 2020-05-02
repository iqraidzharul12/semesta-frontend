import React, { Component} from 'react';
import { Card, CardBody, Row, Col, Label } from 'reactstrap';

class DashboardCard extends Component<any, any> {
  render() {
    const { title, value, icon, color, fontColor} = this.props
    return (
      <Card style={{backgroundColor: color, color: fontColor}}>
        <CardBody>
          <Row>
            <Col md="8" lg="8">
              <Label>{title}</Label>
            </Col>   
            <Col md="4" lg="4">
              <i className={icon}></i>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="bolder pad-6">{value}</h3>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default DashboardCard;
