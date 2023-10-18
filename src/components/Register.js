import { useState } from 'react'
import { useNavigate } from "react-router-dom"
const userURL = "http://localhost:3000/users"


function Register() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirm: ""
        });
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target
            console.log(name, value)
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
                console.log(data)
                setFormData({
                    name: "",
                    password: "",
                    confirm: ""
                })
                navigate("/signin")
            })
        } else {
            alert("Please confirm passwords match")
        }
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Register Now!</h1>
                <label htmlFor='name'>Username</label>
                <br />
                <input
                    onChange={handleChange}
                    value={formData.name}
                    type="name"
                    placeholder="User's Name"
                    id="name"
                    name="name">
                </input>
                <br />
                <br /><label htmlFor='password'>Password</label>
                <br />
                <input
                    onChange={handleChange}
                    value={formData.password}
                    type="password"
                    placeholder='********'
                    id="password"
                    name="password">
                </input>
                <br />
                <br /><label htmlFor='confirm'>Confirm Password</label>
                <br />
                <input
                    onChange={handleChange}
                    value={formData.confirm}
                    type="password"
                    placeholder='********'
                    id="confirm"
                    name="confirm">
                </input>
                <br />
                <button>Register</button> <br />
                <br />
            </form>
        </section>
    )
}


export default Register