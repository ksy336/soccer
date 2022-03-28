import React from "react";
import {Link} from "react-router-dom";
import "../../../sass/App.scss";

function Card({name, country}) {
    return (
        <article className="league block-shadowed">
            <Link className="link" to="/">
                <div className="league__content">
                    <h3 className="league__name">{name}</h3>
                    <h4>{country}</h4>
                </div>
            </Link>
        </article>
    )
}
export default Card;