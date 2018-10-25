import React from 'react'
import { withRouter } from 'react-router-dom'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Modal from 'react-bootstrap/lib/Modal'
class Test extends React.Component{

constructor(props){
    super(props)
    this.state=this.props.state
}
 render(){
    console.log(this.state)
    return(<div id="autobookcontainer">
         <Modal show={this.state.showModal} dialogClassName="custom-modal">

             <Modal.Body>
                 <h2 >Your Auto-Book request is submitted.</h2>
                 <p style={{display:"inline"}}>You will be notified on successful booking through opted channels.</p>
                 <Button style={{marginLeft:"20px",paddingLeft:"20px",paddingRight:"20px"}} bsStyle="info" onClick={()=>{this.setState({showModal:false})}}>OK</Button>
             </Modal.Body>
         </Modal>
<Panel>
    <Panel.Body>
     <form id="autoBookForm">
        <div className="form-container">
            <div className="formContent">
                From
            </div>
            <div className="formContent">
                <FormControl type="email" value={this.state.from} />
            </div>
        </div>
        <div className="form-container">
            <div className="formContent">
                To
            </div>
            <div className="formContent">
                <FormControl type="email" value={this.state.to} />
            </div>
        </div>
        <div className="form-container">
            <div className="formContent">
                Date
            </div>
            <div className="formContent">
                <FormControl type="text" value={this.state.date} />
            </div>
        </div>
        <div className="form-container">
            <div className="formContent">
                Flight Service
            </div>
            <div className="formContent">
                <FormControl componentClass="select" placeholder={this.state.from} >
                    <option value="British Airways">British Airways</option>
                    <option value="other">...</option>
                </FormControl>
            </div>
        </div>
        <div className="form-container">
            <div className="formContent">
                Class
            </div>
            <div className="formContent">
                <FormControl componentClass="select" placeholder={this.state.from} >
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                </FormControl>
            </div>
        </div>
        <div className="form-container">
            <div className="formContent">
                Auto Book on or Before
            </div>
            <div className="formContent">
                <FormControl type="date"  />
            </div>
        </div>
        <div id="buttonContainer">
            <Button bsStyle="success" onClick={()=>{this.setState({showModal:true})}}>Book</Button>
            <Button bsStyle="danger" onClick={()=>{this.setState({showModal:false})}}>Cancel</Button>
        </div>
    </form>
    </Panel.Body>
</Panel>
         <div id="probablity">
             <h4>Probablity</h4>
             <div style={{ width: '100px' }}>
                 <CircularProgressbar
                     percentage={80}
                     text={`${80}%`}
                     background
                     backgroundPadding={6}
                     styles={{
                         background: {
                             fill: '#3e98c7',
                         },
                         text: {
                             fill: '#fff',
                         },
                         path: {
                             stroke: '#fff',
                         },
                         trail: { stroke: 'transparent' },
                     }}
                 />
             </div>
         </div>
     </div>
)}};




export default withRouter(Test);