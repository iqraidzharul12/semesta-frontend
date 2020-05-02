import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { HttpService } from '../../../utilities/HttpService';
import { SuccessAlert, DangerAlert } from '../../../components/sweet-alert';
import { ENDPOINT } from '../../../utilities/api';

class Activate extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data : {
        username: '',
        fullname: '',
        email: '',
        upliner: '',
        key: '',
      },
      alert: null,
    };
  };

  onChange = (e: any) =>{
    const { data } = this.state;
    const copyData = {...data};
    let value = e.target.value;
    if(e.target.name === 'username' || e.target.name === 'upliner' || e.target.name === 'key') value = value.toUpperCase();
    copyData[e.target.name] = value;
    this.setState({data: copyData});
  };

  onActivate = async () =>{
    const { data } = this.state;
    try{
      const res = await HttpService.post(ENDPOINT.ACTIVATE_USER, data, {'Content-Type': 'application/json',});
      if(res.data && res.data.statusCode === 200){
        this.successAlert("Account activation success");
      }
      else{
        this.dangerAlert("Oops, account activation failed with error: "+ res.data.message);
      }
    }
    catch(e){
      this.dangerAlert("Oops, account activation failed with error: "+e);

    }
  };

  successAlert = (message: string) =>{
    const onConfirm = () => { this.hideAlert() };
    const onCancel = () => { this.hideAlert() };
    this.setState({
      alert: 
      <SuccessAlert 
        message={message}
        onConfirm= {onConfirm}
        onCancel={onCancel}
      />
    })
  };

  dangerAlert = (message: string) =>{
    const onConfirm = () => { this.hideAlert() };
    const onCancel = () => { this.hideAlert() };
    this.setState({
      alert: 
      <DangerAlert 
        message={message}
        onConfirm= {onConfirm}
        onCancel={onCancel}
      />
    })
  };

  hideAlert = () => this.setState({alert: null});

  render() {
    const {data, alert} = this.state;
    return (
      <div className="app flex-row align-items-center">
        {alert}
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Activate Account</h1>
                    <p className="text-muted">Activate your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i> &nbsp; Card ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" autoComplete="username" name="username" value={data.username} onChange={this.onChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>  &nbsp; Card Key&nbsp;&nbsp;&nbsp;
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" autoComplete="key" name="key" value={data.key} onChange={this.onChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i> &nbsp; Full Name&nbsp;
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" autoComplete="fullname" name="fullname" value={data.fullname} onChange={this.onChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@ &nbsp; Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroupText> 
                      </InputGroupAddon>
                      <Input type="text" autoComplete="email" name="email" value={data.email} onChange={this.onChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>  &nbsp; Upliner ID
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" autoComplete="upliner" name="upliner" value={data.upliner} onChange={this.onChange}/>
                    </InputGroup>
                    <Button color="success" block onClick={this.onActivate}>Activate Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Activate;
