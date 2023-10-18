import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Form, Input } from 'semantic-ui-react'
const userURL = "http://localhost:3000/users"


function Register() {
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
                setFormData({
                    name: "",
                    password: "",
                    confirm: ""
                })
                navigate("/signin")
            })
        } else {
            console.log("Please provide info")
        }
    };


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Register Now!</h1>
                <Form.Field required>
                    <label htmlFor='name'>Username</label><br />
                    <br />
                    <Input
                        onChange={handleChange}
                        value={formData.name}
                        type="name"
                        placeholder="User's Name"
                        id="name"
                        name="name"
                    />
                    <br /> 
                    <br /><label htmlFor='password'>Password</label><br />
                    <br />
                    <Input
                        onChange={handleChange}
                        value={formData.password}
                        type="password"
                        placeholder='********'
                        id="password"
                        name="password"
                    />
                    <br />
                    <br /><label htmlFor='confirm'>Confirm Password</label><br />
                    <br />
                    <Input
                        onChange={handleChange}
                        value={formData.confirm}
                        type="password"
                        placeholder='********'
                        id="confirm"
                        name="confirm"
                    />
                    <br />
                    <button>Register</button> <br />
                    <br />
                </Form.Field>
            </form>
        </section>
    )
};


export default Register