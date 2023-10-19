import React, { useState } from 'react'
// import Header from "./Header"
// import NavBar from "./NavBar";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useNavigate, useOutletContext } from "react-router-dom";
import Logo from '../Logo.png'


const SignIn = () => {

    const {users, setLoggedInUser, handlePickTeam} = useOutletContext()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const findUser = (e) => {
        e.preventDefault();
    
        const foundUser = users.find((user) => user.name === name.trim());
        

        if (foundUser && foundUser.password !== password) {
            console.log("Password does not match")
        } else if(foundUser && foundUser.password === password) {
            window.localStorage.setItem("isLoggedIn", true);
            window.localStorage.setItem("user", foundUser.name)
            window.localStorage.setItem("team", foundUser.team)
            setLoggedInUser(foundUser)
            localStorage.setItem('user', JSON.stringify({foundUser}))
            setName("")
            setPassword("")
            handlePickTeam(window.localStorage.getItem("team"))
            navigate("/")
        } else {
            console.log('User not found');

        };
    };
        
    
    const addNewUser = () => {
      navigate("/register")
      
    };
    return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='yellow' textAlign='center'>
                    Log In To Your Account
                </Header>
                <Form onSubmit={findUser} size='large'>
                  <Segment stacked>
                    <Form.Input 
                        fluid icon='user'
                        iconPosition='left'
                        placeholder='User'
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                    />
          
                    <Button color='yellow' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New kid on the block? <button onClick={addNewUser}>Sign up here!</button>
                </Message>
              </Grid.Column>
            </Grid>
    )};

export default SignIn
