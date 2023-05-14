import { useState } from "react";
import SearchList from './components/SearchList';
import Rotating from "../Rotating";
import './index.css'
import { API } from "../../../../api"
import {debounceTime, distinctUntilChanged, switchMap, Subject, tap, catchError, of, finalize} from 'rxjs';
import {useNavigate} from "react-router-dom";

const Search = () => {
    const searchSubject = new Subject();
    const [onFocus, setOnFocus] = useState(false);
    const [onResult, setInResult] = useState([]);
    const navigate = useNavigate();

    searchSubject
        .pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((text) => API.postWithAuth('/user/searchShort', {
                text,
            })),
            tap((result) => {
                searchResult = result;
                setInResult(searchResult);
            }),
            catchError((error) => {
                console.error(error);
                return of([]);
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
                  onSubmit={(event) => {
                      event.preventDefault();
                      const text = event.target.querySelector('input[type=text]').value;
                      API.postWithAuth('/user/search', {
                      text: text
                      }).pipe(
                          tap((result) => {
                              if (result.length > 0)
                              navigate('/lk/' + result[0].id);
                          }),
                          catchError((error) => {
                              alert(error);
                              return of(null);
                          }
                      )).subscribe();

                  }}
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