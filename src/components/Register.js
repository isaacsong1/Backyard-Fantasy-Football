import { useState } from 'react'
import { useNavigate, useOutletContext } from "react-router-dom"
import { Button, Form, Icon, Message, Modal } from 'semantic-ui-react'
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
        const { name, password, confirm } = formData;
    
        if (name && password && confirm) {
            fetch(userURL + `?name=${name}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.exists) {
                    console.log("User already exists.");
                } else {
                    if (password === confirm) {
                        fetch(userURL, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ name, password })
                        })
                        .then(response => response.json())
                        .then(data => {
                            setUsers(currentUsers => [...currentUsers, data]);
                            setFormData({
                                name: "",
                                password: "",
                                confirm: ""
                            });
                            navigate("/signin");
                        })
                        .catch(error => {
                            console.error("Registration failed:", error);
                        });
                    } else {
                        console.log("Password and confirmation do not match.");
                    }
                }
            })
            .catch(error => {
                console.error("Server error:", error);
            });
        } else {
            alert("Please fill in all registration fields.");
        }
    };

    return (
        <div id="signin">
            <Message
            attached
            header="Who's Ready to Play Some Football?"
            content='Please login to start playing!'
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
                    <Button color='blue'>Register</Button>
                </Form>
        </div>
    )
};


export default Register