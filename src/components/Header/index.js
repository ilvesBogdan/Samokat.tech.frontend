import './index.css'
import logoPng from './static/logo.png';
import logoWebP from './static/logo.webp';
import Virush from './components/virush';

const Header = () => {
    return (
        <footer className='header'>
            < a href='/'>
            <picture className='header__logo'>
                <source srcSet={logoWebP} type='image/webp' />
                <img src={logoPng} alt='САМОКАТ' />
            </picture></a>
            <Virush />
            <nav>
                <a href='/news'>Новости</a>
                <a href='/lk'>Личный кабинет</a>
                <button id='btn-exit'>Выход</button>
            </nav>
        </footer>
    );
}

export default Header;