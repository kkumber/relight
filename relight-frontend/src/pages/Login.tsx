import AuthForm from "../components/AuthForm";

const Login = () => {
    return ( 
        <AuthForm action={'Login'} url="accounts/auth/login/"/>
     );
}
 
export default Login;