import './index.css';
import icon5 from '../../static/icon5.png'
import icon6 from '../../static/icon6.png'
const Statistics = () => {
    return (
        <div className='profile__statistics'>
            <section className='profile-border'>
                <div class="profile__statistics__header">В МАЕ: </div>
                <div class="profile__statistics__values">
                    <span>5</span>
                    <img src={icon5} alt=''/>
                </div>
                <div class="profile__statistics__values">
                    <span>15</span>
                    <img src={icon6} alt=''/>
                </div>
                <div class="profile__statistics__total">
                    Общий рейтинг: 4,97
                </div>
            </section>
            <section className='profile-border'>
                <div class="profile__statistics__header">В АПРЕЛЕ:</div>
                 <div class="profile__statistics__values">
                    <span>14</span>
                    <img src={icon5} alt=''/>
                </div>
                <div class="profile__statistics__values">
                    <span>47</span>
                    <img src={icon6} alt=''/>
                </div>
                <div class="profile__statistics__total">
                    Общий рейтинг: 4,98
                </div>
            </section>
        </div>
    );
}

export default Statistics;