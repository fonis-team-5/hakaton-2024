import Register from "./Register";
import { Navigate, useNavigate } from "react-router-dom";
class Korisnik {
    constructor(imePrezime, mail, password) {
        this.imePrezime = imePrezime;
        this.mail = mail;
        this.password = password;
    }
}

const Marko = new Korisnik("Marko Arsic", "marko.arsic@fonis.rs", 'marko');


function Login() {
    const navigate = useNavigate();
    const loginBtn = document.getElementById("LOGIN_BTN");
    const handleClick = ()=>{
        navigate("/user");
    }
    return(
        <div className="login-container">
            <div className="login-option">
               <form>
                <h2>Ulogujte se</h2>
                <input type='text'id="MAIL"/>
                <label htmlFor="MAIL"> Mail: </label>
                <input type="password" id="PASSWORD"/>
                <label htmlFor="PASSWORD"> Lozinka: </label>
                <button id="LOGIN_BTN" onClick={handleClick}> Login </button>
            </form> 
            </div>
            <Register />
        </div>
    )
}

export default Login;