import './Login.css';

function Login() {
    return (
        <div>
        <form >
            <h2> Login</h2>
            <p> <input type="text" placeholder="Email"/></p> 
            <p> <input type="password" placeholder="password"/></p> 
            <button>Submit</button>
            <p>New User?<a href="/test/signup">Register</a></p>
            <button class="dummy"><a href='/test'>Home</a></button>
        </form>
        </div>
);
}

export default Login;
