import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch(`https://api.rootnet.in/covid19-in/stats/latest`);
    const actualData = await res.json();
    setData(actualData.data.regional);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="main_heading">
          <h2 className="mb-5 center">
            <span className="bold">India</span> Covid-19 Dashboard - Statewise
          </h2>
        </div>
        <div className="responsive-table">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Discharged</th>
                <th>Deaths</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {data.map((curEle, index) => {
                return (
                  <tr key={index}>
                    <td>{curEle.loc}</td>
                    <td>{curEle.confirmedCasesIndian}</td>
                    <td>{curEle.discharged}</td>
                    <td>{curEle.deaths}</td>
                    <td>{curEle.totalConfirmed}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Covid;
