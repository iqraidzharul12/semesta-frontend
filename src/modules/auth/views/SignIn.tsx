import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { HttpService } from '../../../utilities/HttpService';
import { ENDPOINT } from '../../../utilities/api';
import { SuccessAlert, DangerAlert } from '../../../components/sweet-alert';
import { setHeader, getHeader, setUser } from '../../../utilities/localStorage';

class Login extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data : {
        username: '',
        password: '',
      },
      alert: null,
    };
  };

  onChange = (e: any) =>{
    const { data } = this.state;
    const copyData = {...data};
    let value = e.target.value;
    if(e.target.name === 'username') value = value.toUpperCase();
    copyData[e.target.name] = value;
    this.setState({data: copyData});
  };

  onSignIn = async () =>{
    const { data } = this.state;
    try{
      const res = await HttpService.post(ENDPOINT.SIGNIN, data, {'Content-Type': 'application/json',});
      if(res.data && res.data.statusCode === 200){
        // this.successAlert("Login success");
        setHeader(res.headers);
        setUser(res.data.message);
        this.props.history.push("/");
      }
      else{
        this.dangerAlert("Oops, login failed with error: "+ res.data.message);
      }
    }
    catch(e){
      this.dangerAlert("Oops, login failed with error: "+e);

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
        <Container>
          {alert}
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Activate Account</h2>
                      <p>In order to activate an account you need a serial number on the member card and a registered member as your upliner.</p>
                      <Link to="/activate">
                        <Button color="info" className="mt-3" active tabIndex={-1}>Activate Now</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="username" value={data.username} onChange={this.onChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={data.password} onChange={this.onChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.onSignIn}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          {/* <Button color="link" className="px-0">Forgot password?</Button> */}
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
