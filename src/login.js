import React from 'react'
import { withRouter } from 'react-router-dom'

const ButtonToNavigate = ({ history }) => (

    <form onSubmit={(e) => {e.preventDefault();history.push('/details')}}>
<input type="text" required={true} placeholder="Username"/>
    <input type="text" required={true} placeholder="Password"/>
    <button type="submit" id="loginLink">Log In</button>
</form>
);




export default withRouter(ButtonToNavigate);