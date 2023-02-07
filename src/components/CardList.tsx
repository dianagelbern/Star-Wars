import { useEffect, useState } from "react";
import { API_BASE } from "../const/constants";
import { CardInformation } from "../entities/CardInformation";
import { SearchForm } from "../pages/SearchForm";
import { getPeople } from "../services/peopleService";
import { CardData } from "./CardData"


export const CardList = ({ routeName }: { routeName: string }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [rootName, setRootName] = useState<string>("");

    const getData = () => {
        fetch(`${API_BASE}${routeName}/?search=${query}`)
            .then((response) => response.json())
            .then((data) => setResults(data.results))
            .catch((error) => console.log(error));

        setResults(results);
        console.log(results);
    };

    const cardData = {
        title : '',
        text1: '',
        text2: ''
    }

    useEffect(() => {
        
        setRootName(routeName);
        setRootName(rootName);
        console.log("el routename --> ", rootName)
        getData();
    }, [query]);


const titlePage = routeName.charAt(0).toUpperCase() + routeName.slice(1);
return (
    <div className="app">
        <h1>{titlePage}</h1>
        { 
        

        results.map((result, index) => (
            
            <CardData
                            key={index}

                            title={result.name}
                            text1={result.population}
                            text2={result.terrain}
                        />
            
        ))}

        {/* {
            routeName == "people" && <>
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
            </>
        }
        { 
            routeName == "planets" && <>
                <SearchForm query={query} setQuery={setQuery} />
                <div className="body_list">
                    {results.map((result, index) => (

                        <CardData
                            key={index}

                            title={result.name}
                            text1={result.population}
                            text2={result.terrain}
                        />
                    ))}
                </div>
            </>
        } */}
    </div>
)
}