import { useState } from 'react'
import NavBar from "./NavBar";

const SignIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        debugger

    }

    return (
        <>
        <NavBar />
        <form onSubmit={handleSubmit}>
            <h1>Please Sign In</h1>
            <label htmlFor='username'>User's Name</label>
            <br />
            <input value={name} onChange={(e) => setName(e.target.value)} type="username" placeholder='User' id="username" name="username"></input>
            <br />
            <br /><label htmlFor='password'>Password</label>
            <br />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' id="password"name="password"></input>
            <br />
            <button>Sign In</button>
        </form>
        </>
    )
}

export default SignIn