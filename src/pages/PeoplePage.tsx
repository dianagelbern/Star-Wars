import React, { useEffect, useState } from "react";
import { CardData } from "../components/CardData";
import { Header } from "../components/Header";
import { API_BASE } from "../const/constants";
import '../styles/style.scss'
import { SearchForm } from "./SearchForm";

export const PeoplePage = () => {
      const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [rootName, setRootName] = useState<string>("");

    const getData = () => {
        fetch(`${API_BASE}people/?search=${query}`)
            .then((response) => response.json())
            .then((data) => setResults(data.results))
            .catch((error) => console.log(error));

        setResults(results);
        console.log(results);
    };


    useEffect(() => {
        
        getData();
    }, [query]);


return (
    <div className="main_content">
        <Header></Header>

        <h1>People</h1>
                <SearchForm query={query} setQuery={setQuery} />
                <div className="body_list">
                    {results.map((result, index) => (

                        <CardData
                            key={index}
                            title={result.name}
                            text1={result.gender}
                            text2={result.birth_year}
                        />
                    ))}
                </div>
    </div>
)
}