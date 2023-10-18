import React, { useState, useEffect } from 'react'
// import Header from "./Header"
// import NavBar from "./NavBar";
import { Button, Form, Icon, Message, Modal } from 'semantic-ui-react'
import { useNavigate, useOutletContext } from "react-router-dom";

const usersURL = "http://localhost:3000/users"

// function exampleReducer(state, action) {
//     switch (action.type) {
//       case 'close':
//         return { open: false }
//       case 'open':
//         return { open: true, size: action.size }
//       default:
//         throw new Error('Unsupported action...')
//     }
//   }

const SignIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(usersURL)
        .then(res => res.json())
        .then(usersArray => setUsers(usersArray))
        .catch(err => console.log(err))
      }, []);

    const findUser = async (e) => {
        e.preventDefault();
    
        const foundUser = users.find((user) => user.name === name.trim());

    
        if (foundUser && foundUser.password !== password) {
            console.log("Password does not match")
        } else if(foundUser && foundUser.password === password) {
            await new Promise((resolve) => {
                window.localStorage.setItem("isLoggedIn", true);
                resolve();
              });
          
              setName("");
              setPassword("");
              navigate("/");

        } else {
            console.log('User not found');
        }
      };
    //   const handleClick = (e) => dispatch({ type: 'open', size: 'small' })
        
      
    
    const addNewUser = () => {
      navigate("/register")
    };

//     return (
//         <>
//             <Modal
//                 size= "small"
//                 open={open}
//                 onClose={() => dispatch({ type: 'close' })}
//             >
//                 <Modal.Header>Who's Ready to Play Some Football?</Modal.Header>
//                 <Modal.Content>
//                 <Message 
//                     attached
//                     header="Log in to start playing!"
//                 />
//                     <Form onSubmit={findUser} className='attached fluid segment'>
//                         <Form.Input
//                             label="Username" 
//                             value={name} 
//                             onChange={(e) => setName(e.target.value)} 
//                             type="username" 
//                             placeholder="Username" 
//                             id="username" 
//                             name="username"/>
//                     <Form.Input 
//                             label='Password'
//                             value={password} 
//                             onChange={(e) => setPassword(e.target.value)} 
//                             type="password" 
//                             placeholder='********' 
//                             id="password"
//                             name="password"/>
//             <Button color='blue'>Log In</Button>
//             </Form>
//                 </Modal.Content>
//                 <Modal.Actions>
//                 <Message attached='bottom' warning>
//                     <Icon name='help' />
//                         New kid on the block? <button onClick={addNewUser}>Sign up here!</button>
//                     </Message>
//                 </Modal.Actions>
//             </Modal>
//         </>
//     )
// }
    


//     return (
//         <>

//         <Header />
//         <NavBar />

//         <section>
//             <form onSubmit={findUser}>
//                 <h1>Sign In To Play!</h1>
//                 <label htmlFor='username'>Username</label>
//                 <br />
//                 <input 
                    // value={name} 
                    // onChange={(e) => setName(e.target.value)} 
                    // type="username" 
                    // placeholder="Username" 
                    // id="username" 
                    // name="username"/>
//                 </input>
//                 <br />
//                 <br /><label htmlFor='password'>Password</label>
//                 <br />
//                 <input 
                    // value={password} 
                    // onChange={(e) => setPassword(e.target.value)} 
                    // type="password" 
                    // placeholder='********' 
                    // id="password"
                    // name="password">
//                 </input>
//                 <br />
//                 <button>Sign In</button> <br />
//                 <br />
//             </form>
//             <button onClick={addNewUser}>New User? Register Here!</button>
//         </section>
//         </>
//     )
// }

// export default SignIn


// function SignIn() {


    
  return (
    <div id="signin">
    <Message
      attached
      header="Who's Ready to Play Some Football?"
      content='Please login to start playing!'
    />
    <Form onSubmit={findUser} className='attached fluid segment'>
      <Form.Input
        label="Username" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        type="username" 
        placeholder="Username" 
        id="username" 
        name="username"/>
      <Form.Input 
        label='Password'
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        placeholder='********' 
        id="password"
        name="password"/>
      <Button color='blue'>Log In</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      New kid on the block? <button onClick={addNewUser}>Sign up here!</button>
    </Message>
  </div>
)

}

export default SignIn
