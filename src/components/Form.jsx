import CustomInput from "./CustomInput";

const Form = ({
  carToTry,
  setCarToTry,
  currentCar,
  setCurrentCar,
  interestedBy,
  setInterestedBy,
  formStep1,
  setFormStep1,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentCar === "") {
      alert("Veuillez renseigner votre véhicule actuel");
    }
    if (carToTry === "") {
      alert("Veuillez renseigner le véhicule que vous souhaitez essayer");
    }
    if (interestedBy === "") {
      alert(
        "Veuillez renseigner si vous êtes intéressé(e) pour un achat ou un leasing"
      );
    } else {
      setFormStep1(false);
    }
  };

  /*   console.log(carToTry, currentCar, interestedBy); */
  return (
    <>
      <h2>Je réserve mon essai </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-lign">
          <label>
            Quel type de modèle souhaitez-vous essayer ?
            <select
              value={carToTry}
              onChange={(e) => {
                setCarToTry(e.target.value);
              }}
            >
              <option value="Compacte">Compacte</option>
              <option value="SUV">SUV</option>
              <option value="Electriques & Hybrideso">
                Electriques & Hybrides
              </option>
              <option value="Sportive">Sportive</option>
            </select>
          </label>
        </div>
        <div className="form-lign">
          <label>
            Vous êtes ntéressé(e) par :
            <select
              value={interestedBy}
              onChange={(e) => {
                setInterestedBy(e.target.value);
              }}
            >
              <option value="Achat d’un véhicule">Achat d’un véhicule</option>
              <option value="Leasing d’un véhicule">
                Leasing d’un véhicule
              </option>
            </select>
          </label>
        </div>
        <div className="form-lign">
          <CustomInput
            label="currentCar"
            title="Véhicule Actuel : "
            type="text"
            state={currentCar}
            placeholder="Renault Clio"
            setState={setCurrentCar}
          />
        </div>
        <input type="submit" value="suivant" className="submit" />
      </form>
    </>
  );
};

export default Form;
