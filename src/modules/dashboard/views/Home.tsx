import React, { Component, Fragment } from 'react';
import { Container, Card, CardBody, Row, Col, Table, CardHeader, Label } from 'reactstrap';
import DashboardCard from '../components/DashboardCard';
import { getLatestTransaction, getMonthlyBonus } from '../helper/api';
import { formatCurrency } from '../../../utilities/helper';
import moment from 'moment';
import LatestTransaction from '../components/LatestTransaction';
import BonusTable from '../components/BonusTable';

class DashboardHome extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      latestTransactions: [],
      totalTransactions: 0,
      bonus: {},
      alert,
    };
  }

  async componentDidMount(){
    const res = await getLatestTransaction();
    const resBonus = await getMonthlyBonus();
    if(!res.error){
      this.setState({latestTransactions: res.data.content});
      this.setState({totalTransactions: res.data.totalElements});
    }else{
      this.setState({latestTransactions: []});
    }
    if(!resBonus.error){
      this.setState({bonus: resBonus.data[0]});
    }else{
      console.log(resBonus.errorMessage);
    }
  }

  render() {
    const{latestTransactions, totalTransactions, bonus} = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <DashboardCard title="TOTAL RELATION" value="23 Member" icon="fa fa-user-circle fa-2x align-self-flex-end" color="white" fontColor="black"/>
          </Col>
          <Col>
            <DashboardCard title="TRANSACTION THIS MONTH" value={totalTransactions} icon="fa fa-archive fa-2x align-self-flex-end" color="white" fontColor="black"/>
          </Col>
          <Col>
            <DashboardCard title="INCOME THIS MONTH" value={ bonus.totalBonus? formatCurrency(bonus.totalBonus): formatCurrency(0)} icon="fa fa-money fa-2x align-self-flex-end" color="#3f51b5" fontColor="white"/>
          </Col>
        </Row>
        <Row>
          <Col lg="8" md="8">
            <LatestTransaction latestTransactions={latestTransactions}/>
          </Col>
          <Col lg="4" md="4">
            <BonusTable bonus={bonus}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardHome;
