const SearchList = (props) => {
    const list = props.list || [];

    return (
        <div className='search-list'>
            <datalist id="search-form__data-list">
                {
                    list.map((item) => {
                        return (<option>{item.surname} {item.name} {item.patronymic}</option>);
                    })
                }
            </datalist>
        </div>
    );
}

export default SearchList;