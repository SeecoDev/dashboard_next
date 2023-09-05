import React, {useState} from "react";
import SelectComponent from "./SelectComponent";
import InputComponent from "./InputComponent";

function FormPerron({enviarResultados}) {
  const [genero, setGenero] = useState("");
  const [edad, setEdad] = useState("");
  const [talla, setTalla] = useState("");
  const [peso, setPeso] = useState("");
  const [biciptal, setBiciptal] = useState("");
  const [triciptal, setTriciptal] = useState("");
  const [subescapular, setSubescapular] = useState("");
  const [supralaico, setSupralaico] = useState("");
  const [densidad, setDensidad] = useState("");
  const [imc, setImc] = useState("");
  const [masaResidual, setMasaResidual] = useState("");
  const [masaOsea, setMasaOsea] = useState("");
  const [femur, setFemur] = useState("");
  const [biestoloideo, setBiestoloideo] = useState("");
  const [porcentajeGrasaKg, setPorcentajeGrasaKg] = useState("");
  const [masaOseaPorcentaje, setMasaOseaPorcentaje] = useState("");
  const [masaResidualPorcentaje, setMasaResidualPorcentaje] = useState("");
  const [masaMuscularPorcentaje, setMasaMuscularPorcentaje] = useState("");
  const [masaMusuclarKg, setMasaMuscularKg] = useState("");
  const [error, setError] = useState(false);

  const manejadorSubmit = (e) => {
    e.preventDefault();
    if (
      [
        edad.trim(),
        talla.trim(),
        peso.trim(),
        biciptal.trim(),
        triciptal.trim(),
        subescapular.trim(),
        supralaico.trim(),
      ].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    const altura = parseFloat(talla);
    const pesoNum = parseFloat(peso);
    const biciptalNum = parseFloat(biciptal);
    const triciptalNum = parseFloat(triciptal);
    const subescapularNum = parseFloat(subescapular);
    const supralaicoNum = parseFloat(supralaico);
    const diametroFemur = parseFloat(femur) / 100;
    const diametroBiestoloide = parseFloat(biestoloideo) / 100;

    const densidadCalculada =
      genero === "1"
        ? 1.1765 -
          0.0744 *
            Math.log10(
              biciptalNum + triciptalNum + subescapularNum + supralaicoNum
            )
        : 1.1567 -
          0.0717 *
            Math.log10(
              biciptalNum + triciptalNum + subescapularNum + supralaicoNum
            );

    const imcCalculado = 495 / densidadCalculada - 450;
    const masaOseaCalculada =
      Math.pow(
        Math.pow(talla, 2) * diametroBiestoloide * diametroFemur * 400,
        0.712
      ) * 3.02;
    const masaResidual = genero === "1" ? pesoNum * 0.24 : pesoNum * 0.21;

    // Biestoloideo diametro
    // Femur diametro
    // ~ es elevado a (Estatura al cuadrado por Diametro Femur por Diametro Bies por 400 a la 0.712) por 3.02
    // Masa Osea = (Est~2 * DiaFem * DiaBies * 400)~0.712 * 3.02
    // Masa Residual = H -> 24% , M -> 21% pesoNum / (altura * altura); (del peso)
    setMasaOsea(masaOseaCalculada); // Masa Osea kg
    setMasaResidual(masaResidual); //Masa Residual kg
    setDensidad(densidadCalculada); //Densidad
    setImc(imcCalculado); //Porcentaje Grasa %

    const masaOseaPorcentajeCal = (masaOseaCalculada / pesoNum) * 100;
    setMasaOseaPorcentaje(masaOseaPorcentajeCal);
    const masaResidualPorcentajeCal = (masaResidual / pesoNum) * 100;
    setMasaResidualPorcentaje(masaResidualPorcentajeCal);
    const porcentajeGrasaKgCal = (imcCalculado / 100) * pesoNum;
    setPorcentajeGrasaKg(porcentajeGrasaKgCal);
    const masaMuscularPorcentajeCal =
      100 - masaOseaPorcentajeCal - imcCalculado - masaResidualPorcentajeCal;
    setMasaMuscularPorcentaje(masaMuscularPorcentajeCal);
    const masaMuscularKgCal =
      pesoNum - masaOseaCalculada - masaResidual - porcentajeGrasaKgCal;
    setMasaMuscularKg(masaMuscularKgCal);
  
    const resultados = {
        masaOsea: masaOseaCalculada,
        masaResidual: masaResidual,
        densidad: densidadCalculada,
        porcentajeGrasa: imcCalculado,
        masaOseaPorcentaje: masaOseaPorcentajeCal,
        masaResidualPorcentaje: masaResidualPorcentajeCal,
        porcentajeGrasaKg: porcentajeGrasaKgCal,
        masaMuscularPorcentaje: masaMuscularPorcentajeCal,
        masaMuscularKg: masaMuscularKgCal,
      };
        enviarResultados(resultados);
        JSON.stringify(resultados);
  };

  return (
    <div className=" flex pt-4 pb-4 w-full max-w-lg">
      <form onSubmit={manejadorSubmit}>
        {error && (
          <div className="text-center text-[#FF0000] font-extrabold bg-white">
            <p>Te faltan campos por llenar!</p>
          </div>
        )}
        <div className="pb-2 flex-wrap" >
        <hr></hr>
          <SelectComponent label="Sexo" value={genero} placeholder="Sexo" onChange={(e) => setGenero(e.target.value)} 
            options={[
            {label: "Hombre", value:"1"},
            {label: "Mujer", value:"2"},
          ]}/>
          <InputComponent label="Edad" placeholder="Edad" value={edad} onChange={(e)=> setEdad(e.target.value)}/>
        </div>
        <div className="pb-2">
        <hr></hr>
          <InputComponent label="Talla (m)" placeholder="Talla o Altura" value={talla} onChange={(e)=> setTalla(e.target.value)}/>
          <InputComponent label="Peso (kg)" value={peso} onChange={(e)=> setPeso(e.target.value)}/>
        </div>
        <div className="pb-2">
        <InputComponent label="Biciptal (mm)" placeholder="Biciptal" value={biciptal} onChange={(e)=> setBiciptal(e.target.value)}/>
        <InputComponent label="Triciptal (mm)" placeholder="Triciptal" value={triciptal} onChange={(e)=> setTriciptal(e.target.value)}/>
        </div>
        <div className="pb-2">
          <hr></hr>
        <InputComponent label="Subescapular (mm)" placeholder="Subescapular" value={subescapular} onChange={(e)=> setSubescapular(e.target.value)}/>
        <InputComponent label="Supralaico (mm)" placeholder="Supralaico" value={supralaico} onChange={(e)=> setSupralaico(e.target.value)}/>
        </div>
        <div className="pb-2">
        <hr></hr>
        <InputComponent label="Biestoloideo (cm)" placeholder="Biestoloideo" value={biestoloideo} onChange={(e)=> setBiestoloideo(e.target.value)}/>
        <InputComponent label="Femur (cm)" placeholder="Femur" value={femur} onChange={(e)=> setFemur(e.target.value)}/>
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