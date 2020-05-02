import React, { Component } from 'react';
import { Button, Container, Label } from 'reactstrap';
import { getDirectDownline } from '../helper/api';

class MemberNode extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      downlines: null,
      user: props.user,
      level: props.level,
    };
  }

  
  onClick = async () =>{
    const {downlines, user} = this.state;
    if(downlines && downlines.length){
      this.setState({downlines: null})
    }else{
      const res = await getDirectDownline(user.userName);
      if(!res.error && res.data.length){
        this.setState({downlines: res.data})
      }else{
        this.setState({downlines: null})
      }
    }
  }


  render() { 
    const {user, downlines, level} = this.state;
    return (
      <div className="animated fadeIn">
        <Label>Level {level} &nbsp;&nbsp;&nbsp;</Label>
        {
          user && user.downLines && user.downLines.length ? <Button color="primary" className='mar-bot-5' onClick={this.onClick}>{user.userName} - {user.fullName}</Button> : <Button color="danger" className='mar-bot-5' onClick={this.onClick}>{user.userName} - {user.fullName}</Button>
        }
        <Button className='mar-bot-5' color="link" ><i className="icon-user"></i></Button>
        {
          downlines && downlines.length && level <10  && downlines.map((downline: any) =>{
            const { id } = downline;
            return <div className="tab-node"><MemberNode key={id} user={downline} level={level+1} /></div>
          })
        }
     </div>
    )
  }
}

export default MemberNode;