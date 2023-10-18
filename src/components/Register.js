import { useState } from 'react'
const userURL = "http://localhost:3000/users"


function Register() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirm: ""
        });

    return (
        <section>
            <form>
                <h1>Register Now!</h1>
                <label htmlFor='name'>Username</label>
                <br />
                <input
                    ype="name"
                    placeholder="User's Name"
                    id="name"
                    name="name">
                </input>
                <br />
                <br /><label htmlFor='password'>Password</label>
                <br />
                <input
                    type="password"
                    placeholder='********'
                    id="password"
                    name="password">
                </input>
                <br />
                <br /><label htmlFor='confirm'>Confirm Password</label>
                <br />
                <input
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
