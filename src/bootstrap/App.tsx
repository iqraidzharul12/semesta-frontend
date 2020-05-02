import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../scss/App.scss';
import { DefaultLayout, RouterNonContainer } from '../config';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
  render() {
    return (
          <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                {
                  RouterNonContainer.map((route, idx) => (route.component ? (
                    <Route
                      key={idx} // eslint-disable-line
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props: any) => (
                        <route.component {...props} />
                      )}
                    />
                  ) : (null)))
                }
                <Route path="/" render={props => <DefaultLayout {...props} />} />
              </Switch>
            </React.Suspense>
          </HashRouter>
    );
  }
}

export default App;
