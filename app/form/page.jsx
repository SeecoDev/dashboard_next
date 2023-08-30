"use client";

import TablePerrona from "@/components/TablePerrona";
import React, { useState } from "react";

export default (Form) => {
    
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

  const limpiar = () => {
    setEdad("");
    setTalla("");
    setPeso("");
    setBiciptal("");
    setTriciptal("");
    setSubescapular("");
    setSupralaico("");
  };

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

    const masaOseaPorcentajeCal = (masaOseaCalculada / peso) * 100;
    setMasaOseaPorcentaje(masaOseaPorcentajeCal);
    const masaResidualPorcentajeCal = (masaResidual / peso) * 100;
    setMasaResidualPorcentaje(masaResidualPorcentajeCal);
    const porcentajeGrasaKgCal = (imcCalculado / 100) * peso;
    setPorcentajeGrasaKg(porcentajeGrasaKgCal);
    const masaMuscularPorcentajeCal =
      100 - masaOseaPorcentajeCal - imcCalculado - masaResidualPorcentajeCal;
    setMasaMuscularPorcentaje(masaMuscularPorcentajeCal);
    const masaMuscularKgCal =
      peso - masaOseaCalculada - masaResidual - porcentajeGrasaKgCal;
    setMasaMuscularKg(masaMuscularKgCal);
  };

  return (
    <div className="bg-white h-screen justify-start pl-8 pt-10">
      <h1 className=" text-4xl tracking-wide leading-none text-[#2176FF]">
        {" "}
        Form{" "}
      </h1>
      <div>
        <h2> Ingresa tus datos</h2>
        <br></br>
        <hr></hr>
        <form onSubmit={manejadorSubmit}>
          {error && (
            <div className="text-center text-[#FF0000] font-extrabold bg-white">
              <p>Te faltan campos por llenar!</p>
            </div>
          )}
          <div className="flex">
            <div className="mt-2">
              <label>Genero</label>
              <select
                className="border-2 p-1 w-full rounded-md"
                placeholder="Genero"
                onChange={(e) => setGenero(e.target.value)}
              >
                <option value={1}>Hombre</option>
                <option value={2}>Mujer</option>
              </select>
            </div>
            <div className="mt-2 pl-4">
              <label>Edad</label>
              <input
                className="border-2 p-1 w-full rounded-md"
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <div className="mt-2">
              <label>Talla (m)</label>
              <input
                className="border-2 p-1 w-full rounded-md"
                type="text"
                placeholder="Talla"
                value={talla}
                onChange={(e) => setTalla(e.target.value)}
              />
            </div>
            <div className="mt-2 pl-4">
              <label>Peso (kg)</label>
              <input
                className="border-2 p-1 w-full rounded-md"
                type="text"
                placeholder="Peso"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>
          </div>
          <br></br>
          <hr></hr>
          <div className="flex">
            <div className="mt-2">
              <label>Biciptal (mm)</label>
              <input
                className="border-2 p-1 w-full rounded-md"
                type="text"
                placeholder="Biciptal"
                value={biciptal}
                onChange={(e) => setBiciptal(e.target.value)}
              />
            </div>
            <div className="mt-2 pl-4">
              <label>Triciptal (mm)</label>
              <input
                className="border-2 p-1 w-full rounded-md"
                type="text"
                placeholder="Triciptal"
                value={triciptal}
                onChange={(e) => setTriciptal(e.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <div className="mt-2">
              <label>Subescapular (mm)</label>
              <input
                className="border-2 p-1 w-full rounded-md"
                type="text"
                placeholder="Subescapular"
                value={subescapular}
                onChange={(e) => setSubescapular(e.target.value)}
              />
            </div>
            <div className="mt-2 pl-4">
              <label>Suprailaico (mm)</label>
              <input
                className="border-2 p-1 w-full rounded-md"
                type="text"
                placeholder="Suprailiaco"
                value={supralaico}
                onChange={(e) => setSupralaico(e.target.value)}
              />
            </div>
          </div>
          <br></br>
          <hr></hr>
          <div className="flex">
            <div className="mt-2">
              <label>Biestoloideo (cm)</label>
              <input
                className="border-2 p-1 w-full rounded-md"
                type="text"
                placeholder="Diametro Biestoloideo"
                value={biestoloideo}
                onChange={(e) => setBiestoloideo(e.target.value)}
              />
            </div>
            <div className="mt-2 pl-4">
              <label>Femur (cm)</label>
              <input
                className="border-2 p-1 w-full rounded-md"
                type="text"
                placeholder="Diametro Femur"
                value={femur}
                onChange={(e) => setFemur(e.target.value)}
              />
            </div>
          </div>
          <br></br>
          <hr></hr>
          <div className="mt-4 mb-4">
            <p>Densidad: {densidad}</p>
            <br></br>
            <TablePerrona imc={imc} porcentajeGrasaKg={porcentajeGrasaKg} masaOsea={masaOsea} masaOseaPorcentaje={masaOseaPorcentaje} masaResidual={masaResidual} masaResidualPorcentaje={masaOseaPorcentaje} masaMusuclarKg={masaMusuclarKg} masaMuscularPorcentaje={masaMuscularPorcentaje} />
            <br></br>
            <hr></hr>
            <input
              className="bg-[#2176FF] text-white w-full rounded-md p-1 "
              type="submit"
              value="Calcular"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};
