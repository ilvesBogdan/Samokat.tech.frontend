import {useState} from "react";
import SearchList from './components/SearchList';
import Rotating from "../Rotating";
import './index.css'

const Search = () => {
    const [onFocus, setOnFocus] = useState(false);

    return (
        <>
            <form className='search-form'
                  onFocus={() => setOnFocus(true)}
                  onBlur={() => setOnFocus(false)}
            >
                <input type='submit' value=''/>
                <input
                    type='text'
                    list='search-form__data-list'
                    placeholder='Найти сотрудника просто'
                />
                <SearchList/>
            </form>
            <Rotating visible={onFocus}/>
        </>
    );
}

export default Search;