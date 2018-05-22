const SearchBox = ( {value, filterBooks} ) => (
  <input
    value={value}
    onChange={ event => filterBooks(event.currentTarget.value) }
    type="text"
    placeholder="Поиск по названию или автору"
  />
);