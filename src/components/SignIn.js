import { useState } from 'react'
import Header from "./Header"
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && password){
            navigate("/myteam")
        } else {
            alert("Please provide valid information")
        }

    }

    return (
        <>
        {/* <Header /> */}
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