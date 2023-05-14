import './index.css';

const Comment = () => {
    return (
        <div className='profile-block profile-border profile__comment-block'>
            <h3>Оставить Комплимент Олегу</h3>
            <span>Олег, спасибо тебе за то, что</span>
            <div className='profile__comment-block-flcol'>
                <div className='profile__comment-block-flrow'>
                    <div>Рабочий процесс</div>
                    <div>Общение</div>
                </div>
                <div className='profile__comment-block-flrow'>
                    <div>Личные качества</div>
                    <div>Достижения</div>
                </div>
            </div>
        </div>
    );
}

export default Comment;