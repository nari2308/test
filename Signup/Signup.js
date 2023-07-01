import './Signup.css';


function Signup() {
    return (
        <div>
        <form className='formsignup' >
            <h2> Sign Up</h2>
            <p> <input type="text" placeholder="Name"/></p>
            <p> <input type="text" placeholder="Email"/></p> 
            <p> <input type="password" placeholder="password"/></p> 
            <button>Submit</button>
            <p>Already have account?  <a href="/react-app/login">Login</a></p>
            <button class="dummy"><a href='/react-app'>Home</a></button>
        </form>
        </div>
);
}

export default Signup;