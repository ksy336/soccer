import React, {useContext, useState} from "react";
import {Breadcrumbs} from "@material-ui/core";
import {Link} from "react-router-dom"
import Typography from "@material-ui/core/Typography";
import Header from "../../UI/Header";
import DateFilterInput from "../../UI/DateFilterInput";
import ApiContext from "../../store/api-context";
import "../../sass/App.scss";


function CalendarLeaguesPage() {
    const [enteredFromYear, setEnteredFromYear] = useState("");
    const [enteredToYear, setEnteredToYear] = useState("");

    const apiCtx = useContext(ApiContext);
    console.log(apiCtx.currentLeague);
    const {name} = apiCtx.currentLeague[0];

    const revealInputData = (selectedInputValue) => {
        setEnteredFromYear(selectedInputValue);
        console.log(selectedInputValue);
    }

   const revealToDate = (selectedInputValue)=> {
       setEnteredToYear(selectedInputValue);
       console.log(selectedInputValue);
   }

    return (
        <>
        <Header />
        <div className="wrapper-links">
            <Breadcrumbs aria-label="breadcrumb" >
                <Link
                    color="inherit"
                    to="/"
                    className="link-crumbs"
                >
                    Лиги
                </Link>
                <Link
                    to="/calendar-leagues"
                    className="link-crumbs"
                >
                    {name}
                </Link>
                <Typography />
            </Breadcrumbs>
        </div>
            <article className="matches">
                <div className="wrapper matches__wrapper">
                    <h1 className="matches-text">Матчи</h1>
                    <DateFilterInput
                        onDefaultValue={enteredFromYear}
                        onDefaultToYear={enteredToYear}
                        onSelectedData={revealInputData}
                        onSelectedToData={revealToDate}
                    />
                </div>
            </article>

        </>
    )
}
export default CalendarLeaguesPage;