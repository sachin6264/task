import React from "react";

const Title = () => {
  return (
    <div>
      <div
        className="container-fluid bg-primary text-center"
        style={{
          height: "200px",
          backgroundColor: "linear-gradient(lightBlue, blue",
        }}
      >
        <div className="p-4">
          <h1 className="p-2">this is title</h1>
          <p>
            this is the best title and the best interview i have ever seen ...
          </p>
          <button className="btn btn-light">Readmore</button>
        </div>
      </div>
    </div>
  );
};

export default Title;
