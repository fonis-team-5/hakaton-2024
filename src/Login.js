import Register from "./Register";
import { Navigate, useNavigate } from "react-router-dom";
class Korisnik {
    constructor(imePrezime, mail, password) {
        this.imePrezime = imePrezime;
        this.mail = mail;
        this.password = password;
    }
}

const korisnici = [
    new Korisnik("Marko Arsic", "marko.arsic@fonis.rs", "marko"),
    new Korisnik("Nadja Markicevic", "nadja.markicevic", "nadja"),
    new Korisnik("Luka Jelisavac", "luka.jelisavac@fonis.rs", "luka"),
    new Korisnik("Ivan Baranac", "ivan.baranac@fonis.rs", "ivan")
];




function Login() {
    const navigate = useNavigate();
    const loginBtn = document.getElementById("LOGIN_BTN");
    const handleClick = ()=>{
        const mail = document.getElementById("MAIL").value;
        const password = document.getElementById("PASSWORD").value;

        let flag = false;
        for(let korisnik of korisnici) {
            if (korisnik.mail == mail && korisnik.password == password) {
                flag = true;
            }
        }

        if (flag) {
            navigate('/user')
        } else {
            alert("Ne postoji ovakav korisnik, pokušajte ponovo");
        }

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