import '../styles/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }){

    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <input 
            value={searchValue}
            onChange={onSearchChange} 
            className='TodoSearch' 
            placeholder='Search a to-do' 
        />
    );
}

export {TodoSearch};