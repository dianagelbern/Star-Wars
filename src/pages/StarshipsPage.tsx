import { useEffect, useState } from "react";
import { CardData } from "../components/CardData";
import { Header } from "../components/Header";
import { API_BASE } from "../const/constants";
import { SearchForm } from "../components/SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowUpWideShort, faArrowDownWideShort, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";


import xwing from '../assets/starships/xwing.png';
import cr90corvette from '../assets/starships/cr90corvette.png';
import deathstar from '../assets/starships/deathstar.png';
import rebeltransport from '../assets/starships/rebeltransport.png';
import ywing from '../assets/starships/ywing.png';
import executorBF2 from '../assets/starships/executor_bf2.png';
import imperialClassStarDestroyer from '../assets/starships/imperialclassstardestroyer.png';
import milleniumfalcon from '../assets/starships/milleniumfalcon.png';
import imageVoid from '../assets/big-placeholder.jpg';

// export enum Sort {
//     ASC,
//     DESC,
//     NONE
// }
export enum Sort {
    NONE = 0 as any,
    CREW = 1 as any,
    CARGO = 2 as any,
}

export const StarshipPage = () => {

 


    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [results, setResults] = useState<any[]>([]);

    const [newPage, setNewPage] = useState(Boolean);
    const [sortAscToDescCrew, setSortAscToDescCrew] = useState(false);
    const [sortAscToDescCargo, setSortAscToDescCargo] = useState(false);
    const [sort, setSort] = useState('');

    const starshipsInAssets = [deathstar, xwing, cr90corvette, milleniumfalcon, rebeltransport, ywing, executorBF2, imperialClassStarDestroyer];

    const getData = () => {
        fetch(`${API_BASE}starships/?search=${query}&page=${page}`)
            .then((response) => response.json())
            .then((data) => { setResults(data.results); setNewPage(data.next != null); })
            .catch((error) => console.log(error));
        setResults(results);
        setSort('');
        setNewPage(newPage);
    };

    const getImage = (starships: string) => {

        for (let i = 0; i < starshipsInAssets.length; i++) {
            const namePlanet = starshipsInAssets[i].toLowerCase();

            if (namePlanet.includes(starships.split(' ').join('').toLowerCase())) {
                return namePlanet;
            }
        }
        return imageVoid;
    }

    useEffect(() => {
        
        getData();

    }, [query, page]);

    useEffect(() => {
        
        if(sort == ''){
            getData();
        }

    }, [sort]);

    const handleSort = () => {


        switch (sort) {

            case 'crew':

                sortAscToDescCrew ? 
                setResults(results.slice().sort((a, b) => parseFloat(b.crew) - parseFloat(a.crew))) 
                : setResults(results.slice().sort((a, b) => parseFloat(a.crew) - parseFloat(b.crew))) ;

                break;

            case 'cargo':

                sortAscToDescCargo ? 
                setResults(results.slice().sort((a, b) => parseFloat(b.cargo_capacity) - parseFloat(a.cargo_capacity))) 
                : setResults(results.slice().sort((a, b) => parseFloat(a.cargo_capacity) - parseFloat(b.cargo_capacity))) ;

                break;

            default:
                setResults(results);
                break;
        }


    }


    return (
        <div className="content">
            <Header />

            <h1 className="body_title">Starship</h1>
            <div className="body_interactions">
                <div className="body_filters">
                    <SearchForm query={query} setQuery={setQuery} />
                    <div className="sorter">
                        <div className="select">
                        <select value={sort} onChange={(value) => setSort(value.target.value)} >
                            <option value={''} >Sin orden</option>
                            <option  value={'crew'}  >Crew</option>
                            <option value={'cargo'}  >Cargo</option>
                        </select>
                        </div>
                           <div>
                            {
                               (sort == 'crew' && sortAscToDescCrew || sort == 'cargo' && sortAscToDescCargo) && <FontAwesomeIcon icon={faArrowDownWideShort} color={"white"} onClick={() => {
                                    handleSort()
                                    sort == 'crew' ? setSortAscToDescCrew(!sortAscToDescCrew): setSortAscToDescCargo(!sortAscToDescCargo);
                                }} />}

                            {(sort == 'crew' && !sortAscToDescCrew || sort == 'cargo' && !sortAscToDescCargo) && <FontAwesomeIcon icon={faArrowUpWideShort} color={"white"} onClick={() => {
                                handleSort()
                                sort == 'crew' ? setSortAscToDescCrew(!sortAscToDescCrew): setSortAscToDescCargo(!sortAscToDescCargo);
                            }} />}

                            {sort == '' && <span></span>}
                        </div>
                    </div>

                </div>

                <div className="buttons_page">
                    {
                        page > 1 &&
                        <button className="button_pagination" onClick={() => setPage(page - 1)}><FontAwesomeIcon icon={faAngleLeft} color={"white"} /></button>
                    }

                    <button className="button_pagination_center">{page}</button>
                    {
                        newPage ?
                        <button className="button_pagination" onClick={() => setPage(page + 1)}><FontAwesomeIcon icon={faAngleRight} color={"white"} /></button> : <div className="button_void"></div>}
                </div>
            </div>
            <div className="card_list">
                {results.map((result, index) => (
                    <CardData
                        cardImage={getImage(result.name)}
                        info1={"Cargo capacity: "}
                        info2={"Crew: "}
                        key={index}
                        title={result.name}
                        text1={result.cargo_capacity}
                        text2={result.crew}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}