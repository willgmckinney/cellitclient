import React, { Component } from 'react'
import { Pane, Card, Button, Text, Heading } from 'evergreen-ui';
import Login from './Login'
import Signup from './Signup'


export class Auth extends Component {
    render() {
        return (
           <Pane>
               Auth Component
               <Login/>
               <Signup/>
           </Pane>
        )
    }
}

export default Auth
