import React, { Component} from 'react';
import { Card, CardHeader, Table } from 'reactstrap';
import { formatCurrency } from '../../../utilities/helper';

class BonusTable extends Component<any, any> {
  render() {
    const{ bonus } = this.props;
    return (
      <Card>
        <CardHeader>
          Bonus This Month
        </CardHeader>
        <Table borderless responsive hover size="sm">
          <thead>
            <tr>
              <th className="th-center-middle min-width-100 text-align-center" >Level</th>
              <th className="th-center-middle min-width-100 text-align-center" >Total</th>
            </tr>
          </thead>
          {
            bonus ?
            <tbody>
                <tr className="tableodd">
                  <td className="text-align-center">Level 0</td>
                  <td className="text-align-center">{formatCurrency(bonus.level0| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 1</td>
                  <td className="text-align-center">{formatCurrency(bonus.level1| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 2</td>
                  <td className="text-align-center">{formatCurrency(bonus.level2| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 3</td>
                  <td className="text-align-center">{formatCurrency(bonus.level3| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 4</td>
                  <td className="text-align-center">{formatCurrency(bonus.level4| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 5</td>
                  <td className="text-align-center">{formatCurrency(bonus.level5| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 6</td>
                  <td className="text-align-center">{formatCurrency(bonus.level6| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 7</td>
                  <td className="text-align-center">{formatCurrency(bonus.level7| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 8</td>
                  <td className="text-align-center">{formatCurrency(bonus.level8| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 9</td>
                  <td className="text-align-center">{formatCurrency(bonus.level9| 0)}</td>
                </tr>
                <tr className="tableodd">
                  <td className="text-align-center">Level 10</td>
                  <td className="text-align-center">{formatCurrency(bonus.level10| 0)}</td>
                </tr>
            </tbody>
            : <tbody><tr><td colSpan={18} className="text-align-center"> Data Not Found</td></tr></tbody>
          }
        </Table>
        {/* <div className="text-align-right mar-bot-15 pad-3-13">
          View All &nbsp;&nbsp; <i className="fa fa-caret-right"/>
        </div> */}
      </Card>
    );
  }
}

export default BonusTable;
