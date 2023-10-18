import React, { useState } from 'react'
// import Header from "./Header"
// import NavBar from "./NavBar";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import { Button, Form, Icon, Message, Modal } from 'semantic-ui-react'
import { useNavigate, useOutletContext } from "react-router-dom";
import Logo from '../Logo.png'


const SignIn = () => {
    const {users, setLoggedInUser} = useOutletContext()
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
            setLoggedInUser(foundUser)
            setName("")
            setPassword("")
            navigate("/myTeam")
        } else {
            console.log('User not found');
        }
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
    )
//   return (
//     <div id="signin">
//     <Message
//       attached
//       header="Who's Ready to Play Some Football?"
//       content='Please login to start playing!'
//     />
//     <Form onSubmit={findUser} className='attached fluid segment'>
//       <Form.Input
//         label="Username" 
//         value={name} 
//         onChange={(e) => setName(e.target.value)} 
//         type="username" 
//         placeholder="Username" 
//         id="username" 
//         name="username"/>
//       <Form.Input 
//         label='Password'
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)} 
//         type="password" 
//         placeholder='********' 
//         id="password"
//         name="password"/>
//       <Button color='blue'>Log In</Button>
//     </Form>
//     <Message attached='bottom' warning>
//       <Icon name='help' />
//       New kid on the block? <button onClick={addNewUser}>Sign up here!</button>
//     </Message>
//   </div>
// )

}

export default SignIn
