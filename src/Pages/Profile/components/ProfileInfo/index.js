import fotoDog from '../../static/foto.jpg';
import './index.css';

const ProfileInfo = (promt) => {
    const photoUrl = 'https://company.caaat.pro/upload/avatars/' + promt.photo
    return (
        <>
            <picture className='profile-info profile-block profile-border profile-info__foto'>
                <img src={photoUrl} alt='Фото профиля' />
            </picture>
            <div className='profile-info__bloc-parent'>
            <div className='profile-info profile-block profile-border profile-info__block'>
                <div>
                <h2>{promt.name}</h2>
                </div>
            </div>
            </div>
        </>
    );
}

export default ProfileInfo;