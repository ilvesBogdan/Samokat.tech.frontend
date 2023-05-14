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
    const [profile, setProfile] = useState({
        name: '',
        avatar: ''
    })
    const currentUrl = window.location.href;
    const match = currentUrl.match(/lk\/(.+)/);
    if (match) {
        const id = match[1];
        console.log(id)
        API.getWithAuth('/user/' + id, {}).pipe(
            tap((data) => setProfile(data)),
            catchError(() => {})
        ).subscribe();
    } else {
        API.getWithAuth('/user', {}).pipe(
            tap((data) => setProfile(data)),
            catchError(() => {})
        ).subscribe();
    }
    return (
        <>
            <Header/>
            <main className='profile'>
                <section className='profile__info'><ProfileInfo name={profile.name} photo={profile.avatar}/></section>
                <section className='profile__comment'><Comment/></section>
                <section className='profile__achievements'><Achievements/></section>
                <section className='profile__statistics'><Statistics/></section>
            </main>
        </>
    );
}

export default Profile;