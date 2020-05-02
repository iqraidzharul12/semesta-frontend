import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Avatar extends Component<any, any> {
  render() {
    const {id, name} = this.props;
    return (
      <Container className="text-align-center mar-top-15">
        <img src="../../assets/img/avatars/3.jpg" className="img-avatar mar-bot-10" style={{width:60}} alt="avatar"/>
        <h6>{name?name: 'MEMBER NAME' }</h6>
        <p>{id? id: 'MEMBER ID'}</p>
      </Container>
    );
  }
}

export default Avatar;
