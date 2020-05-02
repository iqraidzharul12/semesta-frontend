import React, { Component } from 'react';
import { Input, Row, Col, Label } from 'reactstrap';
import { getAllUser } from '../../../utilities/api';

class DownlineCreate extends Component<any, any> {
  state={
    users: [],
  }

  async componentDidMount(){
    const users = await getAllUser();
    this.setState({users})
  }

  render() {
    const { users } = this.state
    return (
        <div className="animated fadeIn">
          <Row className="mar-bot-15">
            <Col md="6" lg="6">
              <Row className="mar-bot-5">
                <Col md="4" lg="4">
                  <Label>Username</Label>
                </Col>
                <Col md="8" lg="8">
                  <Input></Input>
                </Col>
              </Row>
              <Row className="mar-bot-5">
                <Col md="4" lg="4">
                  <Label>Email</Label>
                </Col>
                <Col md="8" lg="8">
                  <Input></Input>
                </Col>
              </Row>
              <Row className="mar-bot-5">
                <Col md="4" lg="4">
                  <Label>Full Name</Label>
                </Col>
                <Col md="8" lg="8">
                  <Input></Input>
                </Col>
              </Row>
              <Row className="mar-bot-5">
                <Col md="4" lg="4">
                  <Label>Upliner</Label>
                </Col>
                <Col md="8" lg="8">
                  <Input type="select">
                    {
                      users && users.length && users.map((user: any) =>{
                        const {id, userName, fullName} = user;
                        return <option key={id} value={id}>{userName} - {fullName}</option>
                      })
                    }
                  </Input>
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    )
  }
}

export default DownlineCreate;