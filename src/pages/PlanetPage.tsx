import React, { useEffect, useState } from "react";
import { CardData } from "../components/CardData";
import { Header } from "../components/Header";
import { API_BASE } from "../const/constants";
import '../styles/style.scss';
import { SearchForm } from "../components/SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, } from '@fortawesome/free-solid-svg-icons';
import { Footer } from "../components/Footer";

import tatooine from '../assets/planets/tatooine.png';
import endor from '../assets/planets/endor.png';
import yaviniv from '../assets/planets/yaviniv.png';
import alderaan from '../assets/planets/alderaan.png';
import dagobah from '../assets/planets/dagobah.png';
import kamino from '../assets/planets/kamino.png';
import naboo from '../assets/planets/naboo.png';
import bespin from '../assets/planets/bespin.png';
import coruscant from '../assets/planets/coruscant.png';
import hoth from '../assets/planets/hoth.png';
import imageVoid from '../assets/big-placeholder.jpg';


export const PlanetPage = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [results, setResults] = useState<any[]>([]);
    const [newPage, setNewPage] = useState(Boolean);

    const planetsInAssets = [tatooine, endor, yaviniv, alderaan, dagobah, kamino, naboo, bespin, coruscant, hoth]

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

    const getImage = (planet: string) => {

        for (let i = 0; i < planetsInAssets.length; i++) {
            const namePlanet = planetsInAssets[i].toLowerCase();

            if (namePlanet.includes(planet.split(' ').join('').toLowerCase())) {
                return namePlanet;
            }
        }
        return imageVoid;
    }

    return (
        <div className="content">
            <Header />

            <h1 className="body_title">Planets</h1>
            <div className="body_interactions">
                <SearchForm query={query} setQuery={setQuery} />
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
                        info1={"Terrain: "}
                        info2={"Population: "}
                        key={index}
                        title={result.name}
                        text1={result.terrain}
                        text2={result.population}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}