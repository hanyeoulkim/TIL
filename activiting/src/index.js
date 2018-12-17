import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Header from './Header';
import Activiting from './Activiting';
import ActivitingImg from './ActivitingImg';
import Login from './Login';
import ClubSchedule from './ClubSchedule';
import Tags from './component/Tags';
import Cards from './component/Cards';
import Signup from './Signup';

const App = () => {
    return (
    <Fragment>
        <Header />
        <Navigation />
        {/* <ActivitingImg /> */}
        {/* <Activiting /> */}
        <Login />
        {/* <ClubSchedule /> */}
        {/* <Tags /> */}
        {/* <Cards /> */}
        {/* <Signup /> */}
    </Fragment>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));