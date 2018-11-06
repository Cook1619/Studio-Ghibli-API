import React from "react";

const FilmCard = props => {
  return (
    <div className="card bg-light m-4 rounded-0 shadow">
      <div className="card-header bg-dark text-white rounded-0 shadow bottom-0">
        {props.data.title}
      </div>
      <div className="card-body shadow">
        <h5 className="card-title">Description:</h5>
        <h6 className="card-text">{props.data.description}</h6>
      </div>
    </div>
  );
};

export default FilmCard;
