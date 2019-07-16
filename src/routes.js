import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard/dashboard';
import Registerlogin from './components/Register_login/index';
import Layout from './hoc/layout';
import './Resources/css/styles.css';
import './App.css'

const Routes = ()=>{
    return(
        <Layout>
            <Switch>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/register_login" exact component={Registerlogin}  />
            <Route path="/" exact component={Home}/>
        </Switch>
        </Layout>
    )
}
export default Routes; 