import Header from "../../components/Header";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { catchError, finalize, of, tap } from 'rxjs';
import './index.css'

import { API } from "../../api"

const Main = () => {
    const [isLoader, setLoader] = useState(false)
    useEffect(() => {
        document.body.classList.toggle('loader', isLoader);
    },[isLoader])

    const navigate = useNavigate();

    if (!window.isAuth && !window.check) {
        setLoader(true);
        window.check = true;
        API.getWithAuth('/user', {}).pipe(
            tap(() => {
                window.isAuth = true;
            }),
            catchError(() => {
                navigate("/login");
                window.isAuth = false;
                return of(null);
            }),
            finalize(() => {
                window.check = false;
                setLoader(false);
            })
        )
        .subscribe();
    }

    return (
        <main className='main'>
            <Header/>
            <Search/>
        </main>
    );
}

export default Main;