import './index.css'
import logoPng from './static/logo.png';
import logoWebP from './static/logo.webp';

const Header = () => {
    return (
        <footer className='header'>
            <picture className='header__logo'>
                <source srcSet={logoWebP} type='image/webp' />
                <img src={logoPng} alt='САМОКАТ' />
            </picture>
            <nav>
                <a href='#'>Новости</a>
                <a href='#'>Личный кабинет</a>
                <button id='btn-exit'>Выход</button>
            </nav>
        </footer>
    );
}

export default Header;