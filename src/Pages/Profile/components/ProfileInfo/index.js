import fotoDog from '../../static/foto.jpg';
import './index.css';

const ProfileInfo = () => {
    return (
        <>
            <picture className='profile-info profile-block profile-border profile-info__foto'>
                <img src={fotoDog} alt='Фото профиля' />
            </picture>
            <div className='profile-info__bloc-parent'>
            <div className='profile-info profile-block profile-border profile-info__block'>
                <h2>Имя фамилия</h2>
            </div>
            </div>
        </>
    );
}

export default ProfileInfo;