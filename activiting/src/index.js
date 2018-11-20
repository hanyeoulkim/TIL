import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Header from './Header';
import Activiting from './Activiting';

const App = () => {
    return (
    <Fragment>
        <Header />
        <Navigation />
        <Activiting />
    </Fragment>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));