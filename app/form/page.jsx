"use client";

import FormPerron from "@/components/FormPerron";
import ChartComp from "@/components/PiePerron";
import TablePerrona from "@/components/TablePerrona";
import React, { useState } from "react";

export default (Form) => {
  const [resultados, setResultados] = useState(null);

  const recibirResultados = (nuevosResultados) => {
    setResultados(nuevosResultados);
  };

  return (
    <div className="bg-white h-screen justify-start container mx-auto grid w-screen columns-2" >
      <h1 className=" text-4xl tracking-wide leading-none text-[#2176FF]">
        Form
      </h1>
      <div className="flex-row">
        <FormPerron enviarResultados={recibirResultados} />
      </div>
      {resultados != null && (
        <div className="columns-2">
          <div className="p-4 mx-auto">
            <TablePerrona
              fatPercentage={resultados.fatPercentage}
              fatWeight={resultados.fatWeight}
              boneMass={resultados.boneMass}
              boneMassPercentage={resultados.boneMassPercentage}
              residualMass={resultados.residualMass}
              residualMassPercentage={resultados.residualMassPercentage}
              muscularWeight={resultados.muscularWeight}
              muscularMassPercentage={resultados.muscularMassPercentage}
            />
          
          <div className='w-[300px] mx-auto mt-4 bg-tercero rounded-xl'>
          <ChartComp 
            fatPercentage = {resultados.fatPercentage}
            boneMassPercentage = {resultados.boneMassPercentage}
            residualMassPercentage = {resultados.residualMassPercentage}
            muscularMassPercentage = {resultados.muscularMassPercentage} />
              </div>
          </div>
        </div>
      )}
    </div>
  );
};
