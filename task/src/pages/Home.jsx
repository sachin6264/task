import React, { useState } from "react";
import Data from "../data/data.json";
import MainLayout from "../layout/mainLayout";

const Home = () => {
  const [data, setData] = useState(Data);

  return (
    <MainLayout>
      <div className="container">
        <h1 className="text-center font-bold mt-5">Classes</h1>
        <div className="row ">
          {data?.map((value, index) => {
            return (
              <div className="col col-md-4 col-lg-4 mt-2 p-5">
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
                    <h5 className="card-title text-truncate">
                      {value.ShortDesc}
                    </h5>
                    <button className="btn btn-primary"> Read more</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
