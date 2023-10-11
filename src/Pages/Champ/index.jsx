import React from "react";
import { Link } from "react-router-dom";

export function Champ({
    name = "default",
    title = "default",
    text = "default",
    background = "",
    png = "",
    loadingbg = "",
    champClass = "default",
    previous = "/",
    next = "/"
}) {


    return (
        <>
            <div className="champ-loader" >
                <div className="top-loader">
                    <h1 style={{ backgroundImage: `url(${loadingbg})` }}>{name}</h1>
                </div>

                <div className="bottom-loader">
                    <span>
                        {title}
                    </span>
                </div>

            </div>
                <div className="transition top">
                </div>
                <div className="transition middle">
                </div>
                <div className="transition bottom">
                </div>
            <div className="champ-page">
                <div className="background" style={{ backgroundImage: `url(${background})` }}>
                    <div className="gradient">
                    </div>
                    <div className="golden-details">
                        <div className="top-details">
                            <div className="top-line"></div>
                            <div className="top-rect rect"></div>
                        </div>
                        <div className="bottom-details">
                            <div className="dot-details"></div>
                            <div className="dot-details"></div>
                            <div className="dot-details"></div>
                            <div className="dot-details"></div>
                            <div className="dot-details"></div>
                            <div className="dot-details"></div>
                            <div className="dot-details"></div>
                            <div className="dot-details"></div>
                            <div className="dot-details"></div>
                        </div>
                    </div>
                </div>

                <div className="mid-content">
                    <div className="champ-png">
                        <div style={{ backgroundImage: `url(${png})` }}></div>
                        <span>{champClass}</span>
                    </div>
                    <div className="champ-infos">
                        <h1>{name}</h1>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>

                <div className="navigation">
                    <Link className="previous" to={previous}>
                        <svg viewBox="0 -960 960 960"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                    </Link>

                    <Link className="next" to={next}>
                        <svg viewBox="0 -960 960 960"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                    </Link>
                </div>
            </div>
        </>
    )
}