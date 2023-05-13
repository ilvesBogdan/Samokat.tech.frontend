import { useState } from "react";
import SearchList from './components/SearchList';
import Rotating from "../Rotating";
import './index.css'
import { API } from "../../../../api"
import { debounceTime, distinctUntilChanged, switchMap, Subject, tap } from 'rxjs';

const Search = () => {
    const searchSubject = new Subject();
    const [onFocus, setOnFocus] = useState(false);
    const [onResult, setInResult] = useState([]);

    searchSubject
        .pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((text) => API.post('/user/searchShort', {
                text,
            })),
            tap((result) => {
                searchResult = result;
                setInResult(searchResult);
            })
        )
        .subscribe();

    let searchResult = null;
    const shortSearch = (value) => {
        const text = value.trim();

        if (text.length === 0) {
            return;
        }

        searchSubject.next(value.trim());
    };

    return (
        <>
            <form className='search-form'
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
            >
                <input type='submit' value='' />
                <input
                    type='text'
                    list='search-form__data-list'
                    placeholder='Найти сотрудника просто'
                    onKeyUp={(event) => shortSearch(event.target.value)}
                />
                <SearchList list={onResult} />
            </form>
            <Rotating visible={onFocus} />
        </>
    );
}

export default Search;