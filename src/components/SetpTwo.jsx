import CustomInput from "./CustomInput";
import { useState, useEffect } from "react";
import axios from "axios";

const StepTwo = ({
  name,
  setName,
  firstName,
  setFirstName,
  number,
  setNumber,
  zipCode,
  setZipCode,
  data,
  setData,
  city,
  setCity,
  interestedBy,
  currentCar,
  carToTry,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fecthData = async () => {
      /*       console.log(zipCode); */
      const response = await axios.get(
        `https://geo.api.gouv.fr/communes?codePostal=${zipCode}`
      );

      setData(response.data);
      /*       console.log(response.data.nom); */

      setIsLoading(false);
    };
    fecthData();
  }, [zipCode]);

  /*   console.log(data); */

  return (
    <>
      {isLoading ? (
        <span>Chargement...</span>
      ) : (
        <>
          <h2>Vos Coordonnées</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              if (name === "") {
                alert("veuillez renseigner votre nom");
              }
              if (firstName === "") {
                alert("veuillez renseigner votre prénom");
              }
              if (number.length !== 10) {
                alert("veuillez renseigner un numéro de téléphone valide");
              }
              if (zipCode.length !== 5) {
                alert("Veuillez renseigner un code postal valide");
              } else {
                const formData = new FormData();
                formData.append("type_modele", carToTry);
                formData.append("achat_ou_leasing", interestedBy);
                formData.append("vehicule_actuel", currentCar);
                formData.append("nom", name);
                formData.append("prenom", firstName);
                formData.append("ville", city);
                formData.append("telephone", number);
                const mail = "charlottechartrou@gmail.com";
                const response = await axios.post(
                  `https://hooks.zapier.com/hooks/catch/6844401/3sjq5ou/?em=${mail}`,
                  formData
                );

                if (response.data.status === "success") {
                  alert(
                    "Merci, nous reviendrons vers vous prochainement pour fixer un rendez-vous"
                  );
                  window.location.reload();
                } else {
                  alert("une erreur s'est produite, veuillez réessayer");
                  window.location.reload();
                }
              }
            }}
          >
            <div className="form-lign">
              <CustomInput
                label="name"
                title="Nom : "
                type="text"
                state={name}
                placeholder="Dupont"
                setState={setName}
              />{" "}
            </div>
            <div className="form-lign">
              <CustomInput
                label="firstName"
                title="Prénom : "
                type="text"
                state={firstName}
                placeholder="Jean"
                setState={setFirstName}
              />
            </div>
            <div className="form-lign">
              <CustomInput
                label="number"
                title="Téléphone : "
                type="number"
                state={number}
                placeholder="0610123322"
                setState={setNumber}
              />{" "}
            </div>
            <div className="form-lign">
              <CustomInput
                label="zipCode"
                title="Code Postal : "
                type="number"
                pattern="[0-9]{5}"
                state={zipCode}
                placeholder="92100"
                setState={setZipCode}
              />{" "}
            </div>
            <div className="form-lign">
              {data.map((ville) => {
                setCity(ville.nom);
                /*     console.log(city); */
                return <div key={ville.nom}>Ville : {ville.nom}</div>;
              })}{" "}
            </div>
            <input
              type="submit"
              value="envoyer une demande"
              className="submit"
            />
          </form>
        </>
      )}
    </>
  );
};

export default StepTwo;
