import { useState, useEffect } from 'react'
import Header from "./Header"
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
const usersURL = "http://localhost:3000/users"

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

    const findUser = (e) => {
        e.preventDefault();
    
        const foundUser = users.find((user) => user.name === name);
    
        if (foundUser && foundUser.password !== password) {
            console.log("Password does not match")
        } else if(foundUser && foundUser.password === password) {
            navigate("/myteam")
            setName("")
            setPassword("")
        } else {
            console.log('User not found');
        }
      };
    
    const addNewUser = () => {
      navigate("/register")
    };
    


    return (
        <>
        {/* <Header /> */}
        <section>
            <form onSubmit={findUser}>
                <h1>Sign In To Play!</h1>
                <label htmlFor='username'>Username</label>
                <br />
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    type="username" 
                    placeholder="Username" 
                    id="username" 
                    name="username">
                </input>
                <br />
                <br /><label htmlFor='password'>Password</label>
                <br />
                <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder='********' 
                    id="password"
                    name="password">
                </input>
                <br />
                <button>Sign In</button> <br />
                <br />
            </form>
            <button onClick={addNewUser}>New User? Register Here!</button>
        </section>
        </>
    )
}

export default SignIn