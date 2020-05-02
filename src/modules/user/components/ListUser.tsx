import React, { Component, Fragment } from 'react';
import { Table, Button, Card} from 'reactstrap';
import { DangerAlert, WarningAlert, SuccessAlert } from '../../../components/sweet-alert';

class ListUser extends Component<any, any> {

  handleOpenView = (headerId: string) => { this.props.history.push(`/user/detail/${headerId}`); }

  handleDeleteData = (headerId: string) =>{
    this.props.setStateByName('sweetAlert', 
    <WarningAlert
      onConfirm ={() => { this.deleteData(headerId) }}
      onCancel ={() => { this.hideAlert() }}
      message= {"Are you sure you want to delete data "+headerId+"?"}
    ></WarningAlert>);
  }

  deleteData = (headerId: string) =>{
    this.props.setStateByName('sweetAlert', 
    <SuccessAlert
      onConfirm ={() => { this.hideAlert() }}
      onCancel ={() => { this.hideAlert() }}
      message= {"Data "+headerId+" has been sucessfully deleted"}
    ></SuccessAlert>);
  }

  hideAlert=()=>{
    this.props.setStateByName('sweetAlert', null);
  }

  render() {
    const { userList } = this.props;
    return (
      <Card>
        <Fragment>
          <Table borderless hover responsive size="sm" style={{ backgroundColor: "white", width: '100%', marginBottom: 10}} >
            <thead>
                <tr>
                  <th className="th-center-middle min-width-140">User ID</th>
                  <th className="th-center-middle min-width-140" >Name</th>
                  <th className="th-center-middle min-width-140" >Email</th>
                  <th className="th-center-middle min-width-140" >Role</th>
                  <th className="th-center-middle min-width-140" >Action</th>
                </tr>
            </thead>
            <tbody>
            {
              userList &&  userList.length ?
              userList.map((user: any, key: number) => 
                  <tr key={key} className="tableodd">
                    <td className="text-align-center">{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td className="text-align-center">
                      <Button color="success" onClick={() => this.handleOpenView(user.id)}><i className="fa fa-pencil"> </i></Button>&nbsp;&nbsp;
                      <Button color="danger" onClick={() => this.handleDeleteData(user.id)}><i className="fa fa-trash"> </i></Button>
                    </td>
                  </tr>
                ) : <tr><td colSpan={18} className="text-align-center"> Data Not Found</td></tr>
            }
            </tbody>
          </Table>
        </Fragment>
      </Card>
    )
  }
}

export default ListUser;
