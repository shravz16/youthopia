import GoogleLogin from "react-google-login";
const clientId = '169283847790-f4cslu2itat2eq8l57nga5g3mo0oap55.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log("Login Success! Current user", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Success! Current user", res);
    }
    return ( <div >

        <GoogleLogin clientId = { clientId }
        buttonText = "Login"
        onSuccess = { onSuccess }
        onFailure = { onFailure }
        cookiePolicy = { 'single_host_origin' }
        isSignedIn = { true }
        /> </div >

    )
}

export default Login
