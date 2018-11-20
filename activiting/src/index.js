import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Card from './card';
import faker from "faker";

const App = () => {
    return (
    <Fragment>
        <div className="container-fluid" style={{backgroundColor: 'black', color: "white", textAlign: 'center'}}>
            <h1>Activit'ng</h1>
            <div className="row" style={{backgroundColor: 'black', color: 'white'}}>
                <div className="col-sm-2">Activit'ng</div>
                <div className="col-sm-2">ClubSchedule</div>
                <div className="col-sm-2">Today's Match</div>
                <div className="col-sm-2">Subscription</div>
                <div className="col-sm-2">Dev Team</div>
                <div className="col-sm-2">FAQ</div>
            </div>
            <div className="ui container comments">
                <Card>
                    <CommentDetail
                    author={faker.name.firstName()}
                    time={faker.date.recent().toLocaleString()}
                    body={faker.lorem.sentence()}
                    avatar={faker.image.avatar()}
                    />
                </Card>
                <Card>
                    <CommentDetail
                    author={faker.name.firstName()}
                    time={faker.date.recent().toLocaleString()}
                    body={faker.lorem.sentence()}
                    avatar={faker.image.avatar()}
                    />
                </Card>
                <Card>
                    <CommentDetail
                    author={faker.name.firstName()}
                    time={faker.date.recent().toLocaleString()}
                    body={faker.lorem.sentence()}
                    avatar={faker.image.avatar()}
                    />
                </Card>

            </div>
        </div>
    
    </Fragment>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));