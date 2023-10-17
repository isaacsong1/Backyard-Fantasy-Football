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
    
        if (foundUser) {
          navigate("/myteam");
        } else {
          console.log('User not found');
        }
      };
    return (
        <>
        {/* <Header /> */}
        <NavBar />
        <section>
        <form onSubmit={findUser}>
            <h1>Register To Play!</h1>
            <label htmlFor='username'>Enter Username</label>
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
        </section>
        </>
    )
}

export default SignIn