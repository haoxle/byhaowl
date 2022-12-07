import "./Search.scss";
const Search = ({ searchTerm, handleInput }) => {
  return (
    <form className="searchBar" name="search">
      <label htmlFor="search"></label>
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search..."
        onInput={handleInput}
        value={searchTerm}
      />
    </form>
  );
};

export default Search;
