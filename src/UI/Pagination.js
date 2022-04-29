import React from 'react';
import "../sass/App.scss";

function Pagination( {leaguesPerPage, totalLeagues, paginate}) {
    console.log(leaguesPerPage, totalLeagues);
    const pageNumbers = [];
    for (let i = 1; i <= Math.floor(totalLeagues / leaguesPerPage); i+=1) {
        pageNumbers.push(i);
        // получится массив от 1 до 17
    }
    console.log(pageNumbers);

    return (
        <footer className="footer">
            <section className="pagination">
                <div className="wrapper pagination__wrapper">
                    <div className="container">
                        <nav className="nav__pagination">
                            {pageNumbers.map((page) =>
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a  key={Math.random().toString()}
                                    href="#"
                                    onClick={()=> paginate(page)}
                                >
                                {page}
                                </a>
                                )}
                        </nav>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Pagination;