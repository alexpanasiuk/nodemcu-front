import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Page404 from './Page404';
import Layout from '../../hoc/layout/Layout';
import SensorPage from '../sensorPage/SensorPage';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/sensors/:id" exact component={SensorPage} />
        <Route path="/" exact component={Home} />
        <Route component={Page404} />
      </Switch>
    </Layout>
  );
};

export default Routes;
