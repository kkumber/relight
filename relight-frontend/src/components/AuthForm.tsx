import { useState } from "react";
import useFetch from "../hooks/useFetch";


interface Prop {
    action: string
}


const AuthForm = ({action}: Prop) => {
    const name = action === 'Login' ? "Login" : null;

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = () => {

    };

    return (
    <>
        <form onSubmit={handleSubmit}>
        <h2>{name}</h2> 
            {name && <>
                <label htmlFor="username">Enter Username: </label> <br />
                <input type="text" name="username" id="" placeholder="Username" value={loginData.username} onChange={handleChange}/> <br />
                <label htmlFor="password">Enter Password: </label> <br />
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} /> <br />
            </>
            }
            {!name && <>
                <h2>Register</h2> 
                <label htmlFor="username">Enter Username: </label> <br />
                <input type="text" name="username" id="" placeholder="Username" value={registerData.username} onChange={handleChange}/> <br />
                <label htmlFor="email">Enter Email: </label> <br />
                <input type="email" name="email" placeholder="Email" value={registerData.email} onChange={handleChange}/> <br />
                <label htmlFor="password">Enter Password: </label> <br />
                <input type="password" name="password" placeholder="Password" value={registerData.password} onChange={handleChange} /> <br />
                <label htmlFor="password2">Confirm Password: </label> <br />
                <input type="password" name="password2" placeholder="Password" value={registerData.password2} onChange={handleChange} /> <br />

            </>}

        </form>
    </>
     );
}
 
export default AuthForm;