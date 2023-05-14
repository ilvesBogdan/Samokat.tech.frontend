import Header from "../../components/Header";
import ProfileInfo from './components/ProfileInfo';
import Comment from './components/Comment';
import Achievements from "./components/Achievements";
import Statistics from "./components/Statistics";
import './index.css';
import {API} from "../../api";
import {catchError, finalize, of, tap} from "rxjs";
import {useState} from "react";

const Profile = () => {
    const [profile, setProfile] = useState({})
    const [ok, setOk] = useState(true)
    if (ok) {
    const currentUrl = window.location.href;
    const match = currentUrl.match(/lk\/(.+)/);
    if (match) {
        const id = match[1];
        console.log(id)
        API.getWithAuth('/user/' + id, {}).pipe(
            tap((data) => {
                setProfile(data)
                setOk(false);
            }),
            catchError(() => {})
        ).subscribe();
    } else {
        API.getWithAuth('/user', {}).pipe(
            tap((data) => {
                setProfile(data);
                setOk(false);
            }),
            catchError(() => {})
        ).subscribe();
    }
    }
    const profName = [profile.name, profile.surname, profile.patronymic].join(' ')
    return (
        <>
            <Header/>
            <main className='profile'>
                <section className='profile__info'><ProfileInfo name={profName} photo={profile.avatar}/></section>
                <section className='profile__comment'><Comment name={profile.name} /></section>
                <section className='profile__achievements'><Achievements/></section>
                <section className='profile__statistics'><Statistics/></section>
            </main>
        </>
    );
}

export default Profile;