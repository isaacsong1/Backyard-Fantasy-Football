import { useState } from 'react'
import { useNavigate, useOutletContext } from "react-router-dom"
import { Button, Form, Icon, Message } from 'semantic-ui-react'
const userURL = "http://localhost:3000/users"


function Register() {
    const { setUsers } = useOutletContext()
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirm: ""
        });
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target
            setFormData({...formData, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, password } = formData
        const newUser = {
            name,
            password
        };
        if (formData.name && formData.password) {
            if (formData.password === formData.confirm) {
                fetch(userURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                .then(response => response.json())
                .then(data => {
                    setUsers(currentUsers => [...currentUsers, data])
                    setFormData({
                        name: "",
                        password: "",
                        confirm: ""
                    })
                    navigate("/signin")
                })
            } else {
            console.log("Please provide info")
            };
        } else {
            alert("Please fill in register")
        };
    };


    return (
        <div id="signin">
    <Message
      attached
      header="Who's Ready to Play Some Football?"
      content='Please login to start playing!'
    />
    <Form className='attached fluid segment'>
      <Form.Input
        label="Username" 
        type="username" 
        placeholder="Username" 
        id="username" 
        name="username"/>
      <Form.Input 
        label='Password'
        type="password" 
        placeholder='********' 
        id="password"
        name="password"/>
      <Button color='blue'>Log In</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      New kid on the block? <button>Sign up here!</button>
    </Message>
  </div>
        // <section>
        //     <form onSubmit={handleSubmit}>
        //         <h1>Register Now!</h1>
        //         <Form.Field required>
        //             <label htmlFor='name'>Username</label><br />
        //             <br />
        //             <Input
        //                 onChange={handleChange}
        //                 value={formData.name}
        //                 type="name"
        //                 placeholder="User's Name"
        //                 id="name"
        //                 name="name"
        //             />
        //             <br /> 
        //             <br /><label htmlFor='password'>Password</label><br />
        //             <br />
        //             <Input
        //                 onChange={handleChange}
        //                 value={formData.password}
        //                 type="password"
        //                 placeholder='********'
        //                 id="password"
        //                 name="password"
        //             />
        //             <br />
        //             <br /><label htmlFor='confirm'>Confirm Password</label><br />
        //             <br />
        //             <Input
        //                 onChange={handleChange}
        //                 value={formData.confirm}
        //                 type="password"
        //                 placeholder='********'
        //                 id="confirm"
        //                 name="confirm"
        //             />
        //             <br />
        //             <button>Register</button> <br />
        //             <br />
        //         </Form.Field>
        //     </form>
        // </section>
    )
};


export default Register