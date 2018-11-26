import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Header from './Header';
import Activiting from './Activiting';
import ActivitingImg from './ActivitingImg';
import Login from './Login';

const App = () => {
    return (
    <Fragment>
        <Header />
        <Navigation />
        {/* <ActivitingImg /> */}
        {/* <Activiting /> */}
        <Login />
    </Fragment>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));