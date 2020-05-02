import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { MemberNode } from '../components';
import { getUser } from '../../../utilities/localStorage';

class MapSummary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      alert: null,
      user: {
        userName :'',
        fullName: '',
      },
    };
  }

  componentDidMount(){
    this.setState({user: getUser()})
  }

  render() { 
    const { alert, user } = this.state;
    return (
      <div className="animated fadeIn">
        {alert}
        {
          user && user.userName  && <MemberNode key={0} user={user} level={0}></MemberNode>
        }
      </div>
    )
  }
}

export default MapSummary;