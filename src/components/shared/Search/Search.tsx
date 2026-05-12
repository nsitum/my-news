import "./Search.scss";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

function Search({ value, onChange, onSubmit }: SearchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="search">
      <img
        src="/src/assets/icons/search.svg"
        alt="search"
        className="search__icon"
      />

      <input
        type="text"
        className="search__input"
        placeholder="Search news"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <div className="search__action">
        <button className="search__button" onClick={onSubmit}>
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default Search;
