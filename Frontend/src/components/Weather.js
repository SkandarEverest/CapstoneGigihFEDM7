import { useState, useEffect } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import "./Weather.css";

const Cuaca = () => {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState(" ");
  const [state, setState] = useState("Bandung");

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };
  return (
    <div className="Weather" style={{ width: "500px" }}>
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
        <div class="col-auto">
          <InputGroup className="inputLokasi mb-3" onChange={inputHandler} value={getState}>
            <Form.Control type="text" placeholder="Masukan Lokasi" />
          </InputGroup>
        </div>
        <Button className="mt-2" varinat="primary" onClick={submitHandler}>
          Search
        </Button>
      </div>

      <div className="cards mt-3 mx-auto" style={{ width: "500px" }}>
        {apiData.main ? (
          <div class="card-body text-center">
            <h4 ClassName="h3">
              <i className="fas fa-map-marker-alt mx-2"></i>
              <strong>{apiData.name}</strong>
            </h4>
            <img src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`} alt="weather status icon" className="weather-icon" />
            <p className="nameWeather">
              {" "}
              <strong>{apiData.weather[0].main}</strong>
            </p>
            <h2 className="suhu">{kelvinToFarenheit(apiData.main.temp)}&deg; C</h2>

            <div className="row mt-4">
              <div className="col-md-6">
                <p ClassName="textTemp">Min Temperature</p>
                <p>
                  <i className="fas fa-temperature-low "></i> <strong>{kelvinToFarenheit(apiData.main.temp_min)}&deg; C</strong>
                </p>
              </div>
              <div className="col-md-6">
                <p ClassName="textTemp">Max Temperature</p>
                <p>
                  <i className="fas fa-temperature-high"></i> <strong>{kelvinToFarenheit(apiData.main.temp_max)}&deg; C</strong>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default Cuaca;
