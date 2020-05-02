import React, { Component} from 'react';
import { Card, CardBody, Row, Col, Label, CardHeader, Table } from 'reactstrap';
import moment from 'moment';
import { formatCurrency } from '../../../utilities/helper';

class LatestTransaction extends Component<any, any> {
  render() {
    const{ latestTransactions } = this.props;
    return (
      <Card>
        <CardHeader>
          Latest Transactions
        </CardHeader>
        <Table borderless responsive hover size="sm">
          <thead>
            <tr>
              <th className="th-center-middle min-width-100 text-align-center" >Date</th>
              <th className="th-center-middle min-width-100 text-align-center" >Stockies</th>
              <th className="th-center-middle min-width-100 text-align-center" >Product</th>
              <th className="th-center-middle min-width-100 text-align-center" >Count</th>
              <th className="th-center-middle min-width-100 text-align-center" >Price</th>
              <th className="th-center-middle min-width-100 text-align-center" >Bonus</th>
            </tr>
          </thead>
          <tbody>
          {
            latestTransactions &&  latestTransactions.length ?
            latestTransactions.map((trans: any, key: number) => 
                <tr key={key} className="tableodd">
                  <td className="text-align-center">{ moment(trans.date).format("DD/MM/YYYY") }</td>
                  <td className="text-align-center">{trans.stockies.name}</td>
                  <td className="text-align-center">{trans.product.name}</td>
                  <td className="text-align-center">{trans.count}</td>
                  <td className="text-align-center">{formatCurrency(trans.count * trans.product.sell_price)}</td>
                  <td className="text-align-center">{formatCurrency(trans.product.weight * trans.count *100)}</td>
                </tr>
              ) : <tr><td colSpan={18} className="text-align-center"> Data Not Found</td></tr>
          }
          </tbody>
        </Table>
        <div className="text-align-right mar-bot-15 pad-3-13">
          View All &nbsp;&nbsp; <i className="fa fa-caret-right"/>
        </div>
      </Card>
    );
  }
}

export default LatestTransaction;
