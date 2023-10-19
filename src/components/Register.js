import { useState } from 'react'
import { useNavigate, useOutletContext } from "react-router-dom"
import { Button, Form, Icon, Message, Input } from 'semantic-ui-react'
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
                fetch(userURL)
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.some((user) => user.name === name && user.password === password)) {
                            alert("User with the same name and password already exists.");
                        } else {
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
                                });
                        }
                    });
            } else {
                console.log("Passwords do not match.");
            }
        } else {
            return(
                console.log()
            );
        }
    };
    return (
        <div id="register">
            <Message
            attached
            header="Who's Ready to Play Some Football?"
            content='Please register to start playing!'
            />
                <Form onSubmit={handleSubmit} className='attached fluid segment'>
                    <Form.Input
                        label="Username" 
                        onChange={handleChange}
                        value={formData.name}
                        type="name" 
                        placeholder="Username" 
                        id="name" 
                        name="name"/>
                    <Form.Input 
                        label='Password'
                        onChange={handleChange}
                        value={formData.password}
                        type="password" 
                        placeholder='********' 
                        id="password"
                        name="password"/>
                    <Form.Input 
                        label='Confirm Password'
                        onChange={handleChange}
                        value={formData.confirm}
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