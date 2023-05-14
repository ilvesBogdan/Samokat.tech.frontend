import medal from './static/1.svg';
import graph from './static/2.svg';
import logsa from './static/3.png';

import './index.css';

const Achievements = () => {
    return (
        <div className='profile-block profile-border profile__achievements-block'>
            <div>
            <div><span>Награды</span>
                <img src={medal} />
            </div>
            <div><span>Рейтинг</span>
                <img src={graph}/>
            </div>
            <div><span>Баллы</span>
                <img src={logsa}/>
            </div>
            </div>
        </div>
    );
}

export default Achievements;