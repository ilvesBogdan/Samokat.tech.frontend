import Header from "../../components/Header";
import ProfileInfo from './components/ProfileInfo';
import Comment from './components/Comment';
import Achievements from "./components/Achievements";
import Statistics from "./components/Statistics";
import './index.css';

const Profile = () => {
    return (
        <>
            <Header/>
            <main className='profile'>
                <section className='profile__info'><ProfileInfo/></section>
                <section className='profile__comment'><Comment/></section>
                <section className='profile__achievements'><Achievements/></section>
                <section className='profile__statistics'><Statistics/></section>
            </main>
        </>
    );
}

export default Profile;