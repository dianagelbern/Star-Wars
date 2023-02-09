import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <header className="header">
            <p className="header_title">Imperial destroyers center</p>
            <div className="icons_header">
                <FontAwesomeIcon icon={faBell} color={"white"} size={"1x"} className={"icon"} />
                <FontAwesomeIcon icon={faUser} color={"white"} size={"1x"} className={"icon"} />
            </div>
        </header>
    )
}