import './index.css';

const AuthPage = () => {
    return (
        <form className='auth'>
            <input type="email"/>
            <input type="password"/>
            <input type="checkbox"/>
            <input type="submit" />
        </form>
    );
}

export default AuthPage;