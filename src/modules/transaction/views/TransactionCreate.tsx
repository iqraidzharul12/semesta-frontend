import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { HttpService } from '../../../utilities/HttpService';
import { SuccessAlert, DangerAlert } from '../../../components/sweet-alert';
import { ENDPOINT } from '../../../utilities/api';

class TransactionCreate extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data : {
        date: '',
        username: '',
        stockies: 'adcf9c28-5170-4cfc-873d-a788d4486e97',
        product: '6f78d68e-eb88-463f-af9f-79890cbcdee9',
        count: '',
      },
      alert: null,
    };
  };

  onChange = (e: any) =>{
    const { data } = this.state;
    const copyData = {...data};
    let value = e.target.value;
    if(e.target.name === 'username' || e.target.name === 'stockies') value = value.toUpperCase();
    copyData[e.target.name] = value;
    this.setState({data: copyData});
  };

  onClick = async () =>{
    const { data } = this.state;
    try{
      const res = await HttpService.post(ENDPOINT.CREATE_TRANSACTION, data, {'Content-Type': 'application/json',});
      if(res.data && res.data.statusCode === 200){
        this.successAlert(res.data.message);
      }
      else{
        this.dangerAlert("Oops, add transaction failed with error: "+ res.data.message);
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
                    <h1>New Transaction</h1>
                    <p className="text-muted">Add new transaction</p>
                    <Row className="mb-3">
                      <Col>
                          DATE
                      </Col>
                      <Col  xs="8" sm="8" md="8" lg="8">
                        <Input type="date" autoComplete="date" name="date" value={data.date} onChange={this.onChange}/>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                          BUYER
                      </Col>
                      <Col  xs="8" sm="8" md="8" lg="8">
                        <Input type="text" autoComplete="username" name="username" value={data.username} onChange={this.onChange}/>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                          STOCKIES
                      </Col>
                      <Col  xs="8" sm="8" md="8" lg="8">
                        <Input type="select" autoComplete="stockies" name="stockies" value={data.stockies} onChange={this.onChange} disabled>
                          <option value="adcf9c28-5170-4cfc-873d-a788d4486e97">STOCKIES SEMESTA 1</option>
                        </Input>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                          PRODUCT
                      </Col>
                      <Col  xs="8" sm="8" md="8" lg="8">
                        <Input type="select" autoComplete="product" name="product" value={data.product} onChange={this.onChange}>
                          <option value="6f78d68e-eb88-463f-af9f-79890cbcdee9">YUDISTIRA 5 KG</option>
                          <option value="2854fc3b-9a28-47c6-a820-a836e2911e6f">BIMA 5 KG</option>
                          <option value="8ef2db1c-91eb-414f-8fb5-7734275faf3d">ARJUNA 5 KG</option>
                        </Input>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                          COUNT
                      </Col>
                      <Col  xs="8" sm="8" md="8" lg="8">
                        <Input type="number" autoComplete="count" name="count" value={data.count} onChange={this.onChange}/>
                      </Col>
                    </Row>
                    <Button color="success" block onClick={this.onClick}>Add Transaction</Button>
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

export default TransactionCreate;
