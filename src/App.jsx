import { useState } from "react";
import "./App.css";
import car from "./assets/renaultcar.webp";
import axios from "axios";
import Form from "./components/Form";
import StepTwo from "./components/SetpTwo";

function App() {
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [data, setData] = useState();
  const [city, setCity] = useState("");
  const [carToTry, setCarToTry] = useState("");
  const [interestedBy, setInterestedBy] = useState("");
  const [currentCar, setCurrentCar] = useState("");
  const [formStep1, setFormStep1] = useState(true);

  /*   console.log(name, firstName, number, zipCode, city);
  console.log(carToTry, currentCar, interestedBy); */

  return (
    <>
      <div className="container">
        <h1>
          Réservez votre essai dans le point de vente Renault de votre choix en
          quelques clics.
        </h1>
        <div className="form">
          {formStep1 === true ? (
            <Form
              carToTry={carToTry}
              setCarToTry={setCarToTry}
              interestedBy={interestedBy}
              setInterestedBy={setInterestedBy}
              currentCar={currentCar}
              setCurrentCar={setCurrentCar}
              formStep1={formStep1}
              setFormStep1={setFormStep1}
            />
          ) : (
            <>
              <StepTwo
                firstName={firstName}
                setFirstName={setFirstName}
                name={name}
                setName={setName}
                number={number}
                setNumber={setNumber}
                zipCode={zipCode}
                setZipCode={setZipCode}
                data={data}
                setData={setData}
                city={city}
                setCity={setCity}
                carToTry={carToTry}
                currentCar={currentCar}
                interestedBy={interestedBy}
              />
            </>
          )}
        </div>
        <img src={car} className="background" />
      </div>
    </>
  );
}

export default App;
