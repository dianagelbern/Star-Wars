import React, { useEffect, useState } from "react";
import { CardData } from "../components/CardData";
import { Header } from "../components/Header";
import { API_BASE } from "../const/constants";
import '../styles/style.scss';
import { SearchForm } from "../components/SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, } from '@fortawesome/free-solid-svg-icons';
import { Footer } from "../components/Footer";

export const PlanetPage = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [results, setResults] = useState<any[]>([]);
    const [newPage, setNewPage] = useState(Boolean);

    const getData = () => {
        fetch(`${API_BASE}planets/?search=${query}&page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setResults(data.results);
                setNewPage(data.next != null)
            })
            .catch((error) => console.log(error));

        setResults(results);
        setNewPage(newPage)
        console.log(results);
    };

    useEffect(() => {

        getData();
    }, [query, page]);

    return (
        <div className="content">
            <Header/>

            <h1 className="body_title">Planets</h1>
            <div className="body_interactions">
                <SearchForm query={query} setQuery={setQuery} />
                <div className="buttons_page">
                    {
                        page > 1 &&
                        <button className="button_pagination" onClick={() => setPage(page - 1)}><FontAwesomeIcon icon={faAngleLeft} color={"white"}/></button>
                    }

                    <button className="button_pagination_center">{page}</button>
                    {
                        newPage &&
                        <button className="button_pagination" onClick={() => setPage(page + 1)}><FontAwesomeIcon icon={faAngleRight} color={"white"} /></button>}
                </div>
            </div>
            <div className="card_list">
                {results.map((result, index) => (
                    <CardData
                        info1={"Terrain: "}
                        info2={"Population: "}
                        key={index}
                        title={result.name}
                        text1={result.terrain}
                        text2={result.population}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}