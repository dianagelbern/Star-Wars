import { useEffect, useState } from "react";
import { CardData } from "../components/CardData";
import { Header } from "../components/Header";
import { API_BASE } from "../const/constants";
import { SearchForm } from "../components/SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowUpWideShort, faArrowDownWideShort, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";

export enum Sort {
    ASC,
    DESC,
    NONE
}

export const StarshipPage = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [results, setResults] = useState<any[]>([]);

    const [newPage, setNewPage] = useState(Boolean);
    const [sortCrew, setSortCrew] = useState(Sort.NONE);

    //const [isSortByCrew, setIsSortByCrew] = useState(false);


    const getData = () => {
        fetch(`${API_BASE}starships/?search=${query}&page=${page}`)
            .then((response) => response.json())
            .then((data) => { setResults(data.results); setNewPage(data.next != null); })
            .catch((error) => console.log(error));

        //isSortByCrew ? setResults(results.sort((a,b) => parseFloat(a.crew) - parseFloat(b.crew))) : setResults(results);
        setResults(results);

        setNewPage(newPage);
        //setSort(sort)
    };



    useEffect(() => {

        getData();

    }, [query, page]);


    const handleSort = () => {


        switch (sortCrew) {

            case Sort.ASC:

                setResults(results.slice().sort((a, b) => parseFloat(b.crew) - parseFloat(a.crew)));

                break;

            case Sort.DESC:

                setResults(results.slice().sort((a, b) => parseFloat(a.crew) - parseFloat(b.crew)));

                break;

            default:
                setResults(results);
                break;
        }


    }


    return (
        <div className="content">
            <Header/>

            <h1 className="body_title">Starship</h1>
            <div className="body_interactions">
                <SearchForm query={query} setQuery={setQuery} />

                {/* Aqui va el sort */}
                <div className="sorter">
                    {/* Iconito */}
                    <div>
                        {
                            sortCrew == Sort.ASC && <FontAwesomeIcon icon={faArrowDownWideShort} color={"white"} onClick={() => {
                                setSortCrew(Sort.DESC)
                                handleSort()
                            }} />}

                        {sortCrew == Sort.DESC && <FontAwesomeIcon icon={faArrowUpWideShort} color={"white"} onClick={() => {
                            setSortCrew(Sort.ASC)
                            handleSort()
                        }} />}

                        {sortCrew == Sort.NONE && <FontAwesomeIcon icon={faArrowsUpDown} color={"white"} onClick={() => {
                            setSortCrew(Sort.ASC)

                        }} />}
                    </div>

                    {/* Select para el sort */}
                    <select>
                        <option value="Sin orden">Sin orden</option>
                        <option value="Crew">Crew</option>
                        <option value="Cargo">Cargo</option>
                    </select>
                </div>
                

                <div className="buttons_page">
                    {
                        page > 1 &&
                        <button className="button_pagination" onClick={() => setPage(page - 1)}><FontAwesomeIcon icon={faAngleLeft} color={"white"} /></button>
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
                        info1={"Cargo capacity: "}
                        info2={"Crew: "}
                        key={index}
                        title={result.name}
                        text1={result.cargo_capacity}
                        text2={result.crew}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}