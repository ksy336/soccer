import React from "react";

function DateFilterInput({onDefaultValue, onSelectedData, onDefaultToYear, onSelectedToData}) {

    const getDataFrom = (e) => {
        onSelectedData(e.target.value);
    }
    const getDataTo = (e) => {
        onSelectedToData(e.target.value);
    }

  return (
      <div className="matches__date-filter">
          <span>с</span>
          <input
              type="date"
              className="form-control"
              id="from"
              value={onDefaultValue}
              onChange={getDataFrom}
          />
              <span>по</span>
          <input
              type="date"
              className="form-control"
              id="to"
              value={onDefaultToYear}
              onChange={getDataTo}
          />
      </div>
      )
}
export default DateFilterInput;