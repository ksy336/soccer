import React from "react";
import "../sass/App.scss";

function InputSearch() {
    return (
        <section className="search-section">
            <div className="wrapper search__wrapper">
                <div className="search">
                    <input type="search" className="search-field" placeholder="Поиск" />
                </div>
            </div>
        </section>
    )
}
export default InputSearch;