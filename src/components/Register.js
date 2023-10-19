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
        e.preventDefault();
        const { name, password } = formData;
        const newUser = {
            name,
            password,
        };
        if (formData.name && formData.password) {
            if (formData.password === formData.confirm) {
                // Check if the user already exists on the server
                fetch(userURL)
                    .then((response) => response.json())
                    .then((data) => {
                        // Assuming data is an array of existing users
                        if (data.some((user) => user.name === name && user.password === password)) {
                            alert("User with the same name and password already exists.");
                        } else {
                            // If the user doesn't exist, proceed with registration
                            fetch(userURL, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(newUser),
                            })
                                .then((response) => response.json())
                                .then((data) => {
                                    setUsers((currentUsers) => [...currentUsers, data]);
                                    setFormData({
                                        name: "",
                                        password: "",
                                        confirm: "",
                                    });
                                    navigate("/signin");
                                    return (<Message positive>
                                                <Message.Header>Success!</Message.Header>
                                                <p>
                                                    You have successfully registered!
                                                </p>
                                             </Message>)
                                });
                        }
                    });
            } else {
                console.log("Passwords do not match.");
            }
        } else {
            return(
                <div>
                <Message negative>
                    <Message.Header>Alert!</Message.Header>
                    <p>Please fill out the form completely</p>
                </Message>
                </div>
            );
        }
    };


    return (
        <div id="register">
            <br />
            <Message
                attached
                header="Who's Ready to Play Some Football?"
                content='Please register to start playing!'
                />
            <Form onSubmit={handleSubmit} className='attached fluid segment'>
                <Form.Input
                    onChange={handleChange}
                    value={formData.username}
                    label="Username" 
                    type="name" 
                    placeholder="Username" 
                    id="name" 
                    name="name"/>
                <Form.Input 
                    onChange={handleChange}
                    value={formData.password}
                    label='Password'
                    type="password" 
                    placeholder='********' 
                    id="password"
                    name="password"/>
                <Form.Input 
                    onChange={handleChange}
                    value={formData.confirm}
                    label='Confirm Password'
                    type="password" 
                    placeholder='********' 
                    id="confirm"
                    name="confirm"/>
                <Button color='yellow'>Register</Button>
            </Form>
  </div>
    )
};


export default Register