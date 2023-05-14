import './index.css';
import { useState, useEffect } from "react";
import { API } from "../../api";
import { catchError, finalize, tap, of } from 'rxjs';
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const [isLoader, setLoader] = useState(false)
    useEffect(() => {
        document.body.classList.toggle('loader', isLoader);
    },[isLoader])

    const navigate = useNavigate();

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const auth = () => {
        setLoader(true);

        console.log(email, password);
        API.post('/auth/login', {
            email,
            password,
        }).pipe(
            tap((result) => {
                localStorage.setItem('token', result.accessToken);
                navigate("/");
            }),
            catchError((error) => {
                alert(error);
                return of(null);
            }),
            finalize(() => {
                setLoader(false);
            })
        )
        .subscribe();

    }

    return (
        <form className='auth' onSubmit={(e) => {
                e.preventDefault();
                auth()
            }}>
            <span>Вход</span>
            <input type="email" id='email' placeholder='Email' value={email} onChange={e => SetEmail(e.target.value)} />
            <input type="password" id='password' placeholder='Password' value={password} onChange={e => SetPassword(e.target.value)}  />
            <button type="submit">Войти</button>
        </form>
    );
}

export default AuthPage;