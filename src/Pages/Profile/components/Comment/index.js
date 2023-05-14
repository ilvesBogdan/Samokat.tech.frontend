import './index.css';

const Comment = (promt) => {
    return (
        <div className='profile-block profile-border profile__comment-block'>
            <h3>Оставить Комплимент</h3>
            <span>{promt.name}, спасибо тебе за то, что</span>
            <div className='profile__comment-block-flcol'>
                <div className='profile__comment-block-flrow'>
                    <div class='icon4'>Рабочий процесс</div>
                    <div class='icon3'>Общение</div>
                </div>
                <div className='profile__comment-block-flrow'>
                    <div class='icon1'>Личные качества</div>
                    <div class='icon2'>Достижения</div>
                </div>
            </div>
        </div>
    );
}

export default Comment;