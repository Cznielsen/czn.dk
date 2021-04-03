import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const Routes = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
            </Switch>
        </Router>
    );
};

export default Routes;
