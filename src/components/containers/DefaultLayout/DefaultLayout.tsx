import React, { Component, Suspense } from 'react';
import * as RouterDom from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  // AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from './_nav';
// routes config
import { RouterContainer } from '../../../config';
import Avatar from './Avatar';
import { HttpService } from '../../../utilities/HttpService';
import { ENDPOINT } from '../../../utilities/api';
import { getHeader, getUser } from '../../../utilities/localStorage';
import { SuccessAlert, DangerAlert } from '../../sweet-alert';
import { validateTokenExpiry } from '../../../utilities/helper';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component<any, any> {
  state={
    alert,
    username: '',
    fullName: '',
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut() {
    localStorage.clear();
    this.props.history.push('/login');
  }

  componentDidMount(){
    const expired = validateTokenExpiry();
    if(expired){
      this.signOut();
    }else{
      const user = getUser();
      this.setState({username: user.userName})
      this.setState({fullName: user.fullName})
    }
  }

  render() {
    let navData = null;
    navData = navigation;
    const {alert, username, fullName} = this.state;

    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={() => this.signOut()} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader>
              <Avatar id={username} name={fullName}/>
            </AppSidebarHeader>
            <AppSidebarForm />
            <Suspense fallback={this.loading()}>          
              <AppSidebarNav navConfig={navData} {...this.props} router={RouterDom} />
            </Suspense>
            <AppSidebarFooter />
            {/* <AppSidebarMinimizer></AppSidebarMinimizer> */}
          </AppSidebar>
          <main className="main">
            {alert}
            <AppBreadcrumb appRoutes={RouterContainer} router={RouterDom} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <RouterDom.Switch>
                  {RouterContainer.map((route, idx) => (route.component ? (
                    <RouterDom.Route
                      key={idx} // eslint-disable-line
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props: any) => (
                        <route.component {...props} />
                      )}
                    />
                  ) : (null)))}
                  <RouterDom.Redirect from="/" to="/dashboard" />
                </RouterDom.Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
