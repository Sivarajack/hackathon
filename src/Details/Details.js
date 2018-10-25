import React from 'react';
import './details.css'
import Table from 'react-bootstrap/lib/Table'
import Modal from 'react-bootstrap/lib/Modal'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import { withRouter } from 'react-router-dom'
import { HashRouter, Route,Switch } from 'react-router-dom';
import Test from './Test'
class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            avaliablity: [
                {
                    from: 'Chennai',
                    to: 'Singapore',
                    dates: {
                        '28-10-2018': 10,
                        '30-10-2018': 15,
                        '31-10-2018': 0
                    },
                },{
                    from: 'chennai',
                    to: 'Paris',
                    dates: {
                        '5-11-2018': 3,
                        '7-11-2018': 15,
                        '8-11-2018': 9
                    }
                },{
                    from: 'Chennai',
                    to: 'NewYork',
                    dates: {
                        '6-12-2018':5,
                        '9-12-2018': 16,
                        '10-12-2018': 8
                    }
                },
            ]
        }
    }

    render() {
        console.log(this.props)
        return (<div id="details">
            <hr/>
            <div id="assistant" className="text-center"><h1>Avios Smart Assistant</h1></div>

            <div id="cards-container">
                {this.state.avaliablity.map(entry =>
                    <div id="cards">
                        <div className="card-image">
                            <img src={require(`./../images/${entry.to}.jpg`)} alt=""/>
                        </div>
                        <div className="card-image">
                            <div id="travel-detail">
                                <div id="place">{entry.from}</div>
                                <div id="flight-logo">
                                    <span class="glyphicon glyphicon-plane"></span>
                                </div>
                                <div id="place">{entry.to}</div>
                            </div>
                            <Table bordered condensed hover>
                                <thead >
                                <tr >
                                    <th className="text-center">Date</th>
                                    <th className="text-center">Seats</th>
                                    <th className="text-center"></th>

                                </tr>
                                </thead>
                                <tbody className="text-center">
                                {Object.keys(entry.dates).map(date=><tr>
                                    <td>{date}</td>
                                    <td>{entry.dates[date]}</td>
                                    <td>{entry.dates[date]?<button>Book</button>:<button onClick={() =>{
                                        this.props.history.push(`${this.props.location.pathname}/autobook`)
                                        this.setState({date:date,from:entry.from,to:entry.to})
                                    }}>Auto-Book</button>} </td>
                                </tr>)}

                                </tbody>
                            </Table>
                        </div>
                    </div>
                )}
            </div>
            {/*<Modal show={this.state.showModal} dialogClassName="custom-modal">

                <Modal.Body>
                    <h2>Your Auto-Book request is submitted.</h2>
                    <p>You will be notified on successful booking through opted channels.</p>
                </Modal.Body>
            </Modal>*/}
            <hr/>
            <Switch>
                <Route path="/details/autobook" render={()=><Test state={this.state}/>} />
            </Switch>
        </div>)
    }
}

export default Details;