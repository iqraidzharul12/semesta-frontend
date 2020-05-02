import React, { Component } from 'react';
import {Nav} from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { CompanyName } from '../../../config';

import logo from '../../../assets/img/brand/logo.svg';
import sygnet from '../../../assets/img/brand/sygnet.svg';

const propTypes = {
  children: PropTypes.node, // eslint-disable-line
};

const defaultProps = {};

class DefaultHeader extends Component<any, any> {
  static propTypes: { children: PropTypes.Requireable<PropTypes.ReactNodeLike>; };
  static defaultProps: {};

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: logo, width: 89, height: 25, alt: CompanyName,
          }}
          minimized={{
            src: sygnet, width: 30, height: 30, alt: CompanyName,
          }}
        />
        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}

        <Nav className="ml-auto" navbar>
          <i className="fa fa-sign-out fa-lg clickable" style={{marginRight: 40}} onClick={this.props.onLogout}></i>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
