import React, { Component, Fragment } from 'react';
import { Col, Form, Label, Input ,Row} from 'reactstrap'

class SearchMutationForm extends Component<any, any> {

  onChange = (e: any) =>{
    const { filter } = this.props;
    const copyFilter = filter;
    copyFilter[e.target.name] = e.target.value;
    this.props.setStateByName('filter', copyFilter)
  }
  render() {
    const { filter } = this.props;
    return (
      <Fragment>
        <Col xs="12">
          <Form>
            <Row className="mar-bot-5">
              <Col md='2' lg='2'>
                <Label>User ID</Label>
              </Col>
              <Col md='3' lg='3'> 
                <Input name="id" value={filter.id} onChange={this.onChange}/>
              </Col>
            </Row>
            <Row className="mar-bot-5">
              <Col md='2' lg='2'>
                <Label>Role</Label>
              </Col>
              <Col md='3' lg='3'> 
              <Input name="role" type='select' value={filter.role} onChange={this.onChange}>
                  <option value=''>-- Select Role --</option>
                  <option value='Super Admin'>Super Admin</option>
                  <option value='Admin'>Admin</option>
                </Input>
              </Col>
            </Row>
          </Form>
        </Col>
      </Fragment>
    )
  }
}

export default SearchMutationForm;
