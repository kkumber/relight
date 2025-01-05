import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";


interface Prop {
    action: string,
    url: string,
}


const AuthForm = ({action}: Prop) => {
    const {data, isLoading, error, getToken, getRefreshToken, registerUser} = useFetch();

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

    const name = action === 'Login' ? "Login" : null;


    const handleChangeLoginData = (e: any) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleChangeRegisterData = (e: any) => {
        const {name, value} = e.target;

        setRegisterData({
            ...registerData,
            [name]: value,
        })
    }

    const handleLogin = async (e: any) => {
        e.preventDefault();
        if (loginData.username !== '' && loginData.password !== '') {
            await getToken(loginData);
        }
    };

    const handleRegister = async (e: any) => {
        e.preventDefault();
        for (const [key, value] of Object.entries(registerData)) {
            if (value !== '') {
                await registerUser(registerData);
            };
        };
    };

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);

    return (
        <>
            {isLoading && <Loading />}
            {error && <ErrorMsg error={error} />}
    
            {name ? (
                <form onSubmit={handleLogin}>
                    <h2>{action}</h2>
                    <label htmlFor="username">Enter Username: </label> <br />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={loginData.username}
                        onChange={handleChangeLoginData}
                    /> <br />
                    <label htmlFor="password">Enter Password: </label> <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChangeLoginData}
                    /> <br />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <form onSubmit={handleRegister}>
                    <h2>{action}</h2>
                    <label htmlFor="username">Enter Username: </label> <br />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={registerData.username}
                        onChange={handleChangeRegisterData}
                    /> <br />
                    <label htmlFor="email">Enter Email: </label> <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={registerData.email}
                        onChange={handleChangeRegisterData}
                    /> <br />
                    <label htmlFor="password">Enter Password: </label> <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={registerData.password}
                        onChange={handleChangeRegisterData}
                    /> <br />
                    <label htmlFor="password2">Confirm Password: </label> <br />
                    <input
                        type="password"
                        name="password2"
                        placeholder="Confirm Password"
                        value={registerData.password2}
                        onChange={handleChangeRegisterData}
                    /> <br />
                    <button type="submit">Register</button>
                </form>
            )}
        </>
    );
}

export default AuthForm;