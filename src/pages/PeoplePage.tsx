import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { CardData } from "../components/CardData";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { API_BASE } from "../const/constants";
import '../styles/style.scss'
export const PeoplePage = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [results, setResults] = useState<any[]>([]);
    const [newPage, setNewPage] = useState(Boolean);

    const getData = () => {
        fetch(`${API_BASE}people/?search=${query}&page=${page}`)
            .then((response) => response.json())
            .then((data) => {setResults(data.results); setNewPage(data.next != null)})
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

            <h1 className="body_title">People</h1>
            <div className="body_interactions">
                <SearchForm query={query} setQuery={setQuery} />
                <div className="buttons_page">
                    {
                        page > 1 &&
                        <button  className="button_pagination" onClick={() => setPage(page - 1)}><FontAwesomeIcon icon={faAngleLeft} color={"white"}/></button>
                    }

                    <button className="button_pagination_center">{page}</button>
                    {
                        newPage &&
                        <button  className="button_pagination" onClick={() => setPage(page + 1)}><FontAwesomeIcon icon={faAngleRight} color={"white"} /></button>}
                </div>
            </div>
            <div className="card_list">
                {results.map((result, index) => (

                    <CardData
                        key={index}
                        info1={"Gender: "}
                        info2={"Birth year: "}
                        title={result.name}
                        text1={result.gender}
                        text2={result.birth_year}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}