const Search = ({ onChange }) => (
  <input onChange={(event) => onChange(event.target.value)} />
);

export default Search;
