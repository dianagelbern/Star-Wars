import { useEffect, useState } from "react";
import { CardData } from "../components/CardData";
import { Header } from "../components/Header";
import { API_BASE } from "../const/constants";
import { SearchForm } from "../components/SearchForm";

export const StarshipPage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [filter, setFilter] = useState();

    

    const getData = () => {
        fetch(`${API_BASE}starships/?search=${query}`)
            .then((response) => response.json())
            .then((data) => setResults(data.results))
            .catch((error) => console.log(error));

        setResults(results);
    };


    useEffect(() => {
        
        getData();
    }, [query]);

    const filtered = filter ? results.filter((d) => d.filter === filter) : results;

    // const sortByCrew = results.sort((a, b) =>  a.localeCompare(b, undefined, { numeric: true }));
    // const sortBycargo_capacity = results.sort((a, b) =>  a.localeCompare(b, undefined, { numeric: true }));
    // const normalData = results;


return (
    <div className="main_content">
        <Header></Header>

        <h1 className="body_title">Starship</h1>
                <SearchForm query={query} setQuery={setQuery} />
                <div className="body_list">
                    {results.map((result, index) => (

                        <CardData
                            key={index}
                            title={result.name}
                            text1={result.cargo_capacity}
                            text2={result.crew}
                        />
                    ))}
                </div>
                
    </div>
)
}