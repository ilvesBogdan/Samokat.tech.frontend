const SearchList = (props) => {
    return (
        <div className='search-list'>
            <datalist id="search-form__data-list">
                <option>Аперитивы</option>
                <option>Горячие</option>
                <option>Десертные</option>
                <option>Диджестивы</option>
                <option>Молочные</option>
                <option>Слоистые</option>
            </datalist>
        </div>
    );
}

export default SearchList;