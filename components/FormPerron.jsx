import React, {useState} from "react";
import SelectComponent from "./SelectComponent";
import InputComponent from "./InputComponent";

function FormPerron({enviarResultados}) {

  const [error, setError] = useState(false);

  const [inputValues, setInputValues] = useState({
    height: "",
    age:"",
    weight: "",
    biciptal: "",
    triciptal:"",
    subscapular:"",
    supralaic:"",
    femur:"",
    bistoloid:"",
    gender:""
  });

  

  const handleInputChange= (e) => {
    const {name, value, type} = e.target;

    let parsedValue = value;
    
    if (type === "number" && value !== "") {
      parsedValue = parseFloat(value);
    }
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    JSON.stringify(inputValues);

    const femur = parseFloat(inputValues.femur) / 100;
    const bistoloid = parseFloat(inputValues.bistoloid) / 100;

    const density =
      inputValues.gender === "1"
        ? 1.1765 -
          0.0744 *
            Math.log10(
              inputValues.biciptal + inputValues.triciptal + inputValues.subscapular + inputValues.supralaic
            )
        : 1.1567 -
          0.0717 *
            Math.log10(
              inputValues.biciptal + inputValues.triciptal + inputValues.subscapular + inputValues.supralaic
            );

    const fatPercentage = 495 / density - 450;
    
    const boneMass =
      Math.pow(
        Math.pow(inputValues.height, 2) * bistoloid * femur * 400,
        0.712
      ) * 3.02;
    
      const residualMass = inputValues.gender === "1" ? inputValues.weight * 0.24 : inputValues.weight * 0.21;

    // Biestoloideo diametro
    // Femur diametro
    // ~ es elevado a (Estatura al cuadrado por Diametro Femur por Diametro Bies por 400 a la 0.712) por 3.02
    // Masa Osea = (Est~2 * DiaFem * DiaBies * 400)~0.712 * 3.02
    // Masa Residual = H -> 24% , M -> 21% pesoNum / (altura * altura); (del peso)

    const boneMassPercentage = (boneMass / inputValues.weight) * 100;
    
    const residualMassPercentage =  (residualMass / inputValues.weight) * 100;
    
    const fatWeight = (fatPercentage / 100) * inputValues.weight;
    
    const muscularMass =
      100 - boneMassPercentage - fatPercentage - residualMassPercentage;
    
    const muscularWeight =
      inputValues.weight - boneMass - residualMass - fatWeight;
    
  
    const resultados = {
        masaOsea: boneMass,
        masaResidual: residualMass,
        densidad: density,
        porcentajeGrasa: fatPercentage,
        masaOseaPorcentaje: boneMassPercentage,
        masaResidualPorcentaje: residualMassPercentage,
        porcentajeGrasaKg: fatWeight,
        masaMuscularPorcentaje: muscularMass,
        masaMuscularKg: muscularWeight,
      };
        enviarResultados(resultados);
        JSON.stringify(resultados);
  };

  return (
    <div className=" flex-row pt-4 pb-4 w-full max-w-lg">
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="text-center text-[#FF0000] font-extrabold bg-white">
            <p>Te faltan campos por llenar!</p>
          </div>
        )}
        <div className="pb-2 flex-wrap" >
        <hr></hr>
          <SelectComponent label="Sexo" name="gender" value={inputValues.gender} placeholder="Sexo" onChange={handleInputChange}
            options={[
            {label: "Hombre", value:"1"},
            {label: "Mujer", value:"2"},
          ]}/>
          <InputComponent label="Edad" placeholder="Edad" name="age" type="number" value={inputValues.age} onChange={handleInputChange}/>
        </div>
        <div className="pb-2">
        <hr></hr>
          <InputComponent label="Talla (m)" placeholder="Talla o Altura" name="height" type="number" value={inputValues.height} onChange={handleInputChange}/>
          <InputComponent label="Peso (kg)" placeholder="Peso" name="weight" type="number" value={inputValues.weight} onChange={handleInputChange}/>
        </div>
        <div className="pb-2">
        <InputComponent label="Biciptal (mm)" placeholder="Biciptal" name="biciptal" type="number" value={inputValues.biciptal} onChange={handleInputChange}/>
        <InputComponent label="Triciptal (mm)" placeholder="Triciptal" name="triciptal" type="number" value={inputValues.triciptal}  onChange={handleInputChange}/>
        </div>
        <div className="pb-2">
          <hr></hr>
        <InputComponent label="Subescapular (mm)" placeholder="Subescapular" name="subscapular" type="number" value={inputValues.subscapular} onChange={handleInputChange}/>
        <InputComponent label="Supralaico (mm)" placeholder="Supralaico" name="supralaic" type="number" value={inputValues.supralaic} onChange={handleInputChange}/>
        </div>
        <div className="pb-2">
        <hr></hr>
        <InputComponent label="Biestoloideo (cm)" placeholder="Biestoloideo" name="bistoloid" type="number" value={inputValues.bistoloid} onChange={handleInputChange}/>
        <InputComponent label="Femur (cm)" placeholder="Femur" type="number" name="femur" value={inputValues.femur} onChange={handleInputChange}/>
        </div>
        <div className="pb-2 py-3 px-4"> 
          <hr></hr>
          <input
            className="bg-[#2176FF] text-white w-full rounded-md p-1 "
            type="submit"
            value="Calcular"
          ></input>
        </div>
      </form>
    </div>
  );
}
export default FormPerron;