import React, { Component } from 'react';
class DownlineDetail extends Component<any, any> {
  render() {
    return (
        <div className="animated fadeIn">
          Detail User ID = {this.props.match.params.headerId}
      </div>
    )
  }
}

export default DownlineDetail;