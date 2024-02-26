import React from "react";

const ReadMore = () => {
  return (
    <div>
      {" "}
      <div className="card ">
        <div className=" h3 card-header">{value.Name}</div>
        <div className="card-body">
          <img
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
          <h5 className="card-title text-truncate">{value.ShortDesc}</h5>
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
