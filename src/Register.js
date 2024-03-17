function Register() {
    return(
        <div className="register-option">
            <form>
                <h2>Registrujte se</h2>
                <label htmlFor="IME_R">Ime: </label>
                <input type='text' id="IME_R"/>
                <label htmlFor="PREZIME_R">Prezime: </label>
                <input type="text" id="PREZIME_R"/>
                <label htmlFor="MAIL_R"> Mail: </label>
                <input type='text'id="MAIL_R"/>
                <label htmlFor="PASSWORD_R"> Lozinka: </label>
                <input type="password" id="PASSWORD_R"/>
                <label htmlFor="PASSWORD_REPEAT_R"> Lozinka: </label>  
                <input type="password" id="PASSWORD_REPEAT_R"/>
                <button type='submit'> Registruj se</button>
            </form>
                

        </div>
    );
}

export default Register;