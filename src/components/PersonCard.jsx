import React from "react";

const PersonCard = props => {
  return (
    <div className="card bg-light m-4 rounded-0 shadow">
      <div className="card-header bg-dark text-white rounded-0 shadow bottom-0">
        Name: {props.data.name}
      </div>
      <div className="card-body shadow">
        <h5 className="card-title rounded-0 ">Gender: {props.data.gender}</h5>
        <h5 className="card-title rounded-0 ">Age: {props.data.age}</h5>
      </div>
    </div>
  );
};

export default PersonCard;
