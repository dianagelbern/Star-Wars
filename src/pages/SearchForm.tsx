export const SearchForm = ({ query, setQuery }: { query: any, setQuery: any }) => {
  const handleTextInput = (e: { target: { value: any; }; }) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleTextInput}
        value={query}
        placeholder="Search"
      />
    </form>
  );
};

function setSearch(query: any) {
    throw new Error("Function not implemented.");
}
