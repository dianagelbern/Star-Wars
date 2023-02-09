import { useEffect, useState } from "react";
import { CardData } from "../components/CardData";
import { Header } from "../components/Header";
import { API_BASE } from "../const/constants";
import { SearchForm } from "../components/SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";

import atat from '../assets/vehicles/AT-AT.png';
import atst from '../assets/vehicles/AT-ST.jpg';
import cloudcar from '../assets/vehicles/Cloud-car-v2.png';
import sailbarge from '../assets/vehicles/sailbarge.png';
import sandcrawler from '../assets/vehicles/sandcrawler.jpg';
import t16skyhopper from '../assets/vehicles/t16skyhopper.png';
import tiefighter from '../assets/vehicles/TIEfighter.png';
import x34landspeeder from '../assets/vehicles/X34-landspeeder.jpg';
import imageVoid from '../assets/big-placeholder.jpg';

export const VehiclePage = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [results, setResults] = useState<any[]>([]);
    const [newPage, setNewPage] = useState(Boolean);

    const getData = () => {
        fetch(`${API_BASE}vehicles/?search=${query}&page=${page}`)
            .then((response) => response.json())
            .then((data) => {setResults(data.results);setNewPage(data.next != null)})
            .catch((error) => console.log(error));

        setResults(results);
        setNewPage(newPage)
    };

    useEffect(() => {
        getData();
    }, [query, page]);

    const vehiclesAssets = [atat, atst, cloudcar, sailbarge, sandcrawler, t16skyhopper, tiefighter, x34landspeeder];


    const getImage = (vehicle: string) => {

        for (let i = 0; i < vehiclesAssets.length; i++) {
            const namePlanet = vehiclesAssets[i].toLowerCase();

            if (namePlanet.includes(vehicle.split(' ').join('').split('-').join('').toLowerCase())) {
                return namePlanet;
            }
        }
        return imageVoid;
    }

    return (

        <div className="content">
            <Header/>
                <h1 className="body_title">Vehicles</h1>
                <div className="body_interactions">
                <SearchForm query={query} setQuery={setQuery} />
                <div className="buttons_page">
                    {
                        page > 1 &&
                        <button className="button_pagination" onClick={() => setPage(page - 1)}><FontAwesomeIcon icon={faAngleLeft} color={"white"}/></button>
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
                    cardImage={getImage(result.name) }
                        info1={"Max atmosphering speed: "}
                        info2={"Cost: "}
                        key={index}
                        title={result.name}
                        text1={result.max_atmosphering_speed}
                        text2={result.cost_in_credits}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}