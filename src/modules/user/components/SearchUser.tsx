import React, { Component } from 'react';
import { Button, Col, Row, Label, Collapse } from 'reactstrap';
import SearchUserForm from './SearchUserForm';

class SearchUser extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapse: false,
    };
  }

  toggle = () => { this.setState({ collapse: !this.state.collapse }); }

  render() {
    const {filter } = this.props
    return (
      <Row>
        <Col>
          <Row className="mar-bot-10">
            <Col>
              <Label className="search-title"><b><i className="fa fa-search"></i> Search  </b></Label>
            </Col>
          </Row>

          <Row className="mar-bot-10">
            <Col  className="mar-bot-15">
                <Collapse isOpen={this.state.collapse} className="width-100-percent">
            <SearchUserForm
                filter={filter}
                setStateByName = {(name: string, value: any) => this.props.setStateByName(name, value)}
            />
            <Col xs="12">
                <Button
                  type="submit"
                  onClick={(e)=> this.props.onSearch(e)}
                  color="primary"
                >
                <i className="fa fa-search"></i> Search
                </Button>&nbsp;&nbsp;
                <Button
                  type="submit"
                  onClick={this.props.onClear}
                  color="danger"
                >
                <i className="fa fa-refresh"></i> Clear
                </Button>&nbsp;&nbsp;
            </Col>
        </Collapse>
            </Col>
            <Col xs="12">
              <Button
                onClick={() => this.toggle()}
                type="submit"
                color="primary"
              >
                Filter&nbsp;&nbsp;
                {this.state.collapse ? <i className="fa fa-sort-asc"></i> : <i className="fa fa-sort-desc"></i>}
              </Button> &nbsp;&nbsp;
              <Button
                  color="success"
                  onClick={() => this.props.handleOpenCreate()}
                  >
                  <i className="fa fa-plus"></i> Create New User
                </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}


export default SearchUser