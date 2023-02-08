import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <header className="header">
            <p >Imperial Destroyes center</p>
            <div>
                <FontAwesomeIcon icon={faBell} color={"white"} size={"1x"} className={"icons_header"} />
                <FontAwesomeIcon icon={faUser} color={"white"} size={"1x"} className={"icons_header"} />
            </div>
        </header>
    )
}