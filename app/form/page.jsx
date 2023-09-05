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
    <div className="bg-white h-screen justify-start pl-8 pt-10 flex-col" >
      <h1 className=" text-4xl tracking-wide leading-none text-[#2176FF]">
        Form
      </h1>
      <FormPerron enviarResultados={recibirResultados} />
      {resultados != null && (
        <div className="flex-col">
          <div className="p-4">
            <TablePerrona
              porcentajeGrasa={resultados.porcentajeGrasa}
              porcentajeGrasaKg={resultados.porcentajeGrasaKg}
              masaOsea={resultados.masaOsea}
              masaOseaPorcentaje={resultados.masaOseaPorcentaje}
              masaResidual={resultados.masaResidual}
              masaResidualPorcentaje={resultados.masaResidualPorcentaje}
              masaMuscularKg={resultados.masaMuscularKg}
              masaMuscularPorcentaje={resultados.masaMuscularPorcentaje}
            />
          
            <div className='w-[300px] mx-auto mt-4 bg-tercero rounded-xl'>{/*grafica */}
          <ChartComp grasaCorp = {resultados.porcentajeGrasa}
          masaOpor = {resultados.masaOseaPorcentaje}
          masaRpor = {resultados.masaResidualPorcentaje}
          masaMus = {resultados.masaMuscularPorcentaje} />
              </div>
        </div>
      
        </div>
      )}
    </div>
  );
};
