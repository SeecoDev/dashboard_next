"use client";

import FormPerron from "@/components/FormPerron";
import ChartComp from "@/components/PiePerron";
import TablePerrona from "@/components/TablePerrona";
import React, { useState } from "react";

export default (Form) => {
  const [results, setResults] = useState(null);

  const getResults = (newResults) => {
    setResults(newResults);
  };

  return (
<div className="bg-white h-screen container mx-auto flex items-center">
  <div className="w-1/4 p-8">
    <h1 className="text-4xl tracking-wide leading-none text-[#2176FF]">
      Form
    </h1>
    <div className="w-full">
      <FormPerron sendResults={getResults} />
    </div>
  </div>
  
  {results != null && (
    <div className="w-3/4 p-8">
      <div className="p-4">
        <TablePerrona
          fatPercentage={results.fatPercentage}
          fatWeight={results.fatWeight}
          boneMass={results.boneMass}
          boneMassPercentage={results.boneMassPercentage}
          residualMass={results.residualMass}
          residualMassPercentage={results.residualMassPercentage}
          muscularWeight={results.muscularWeight}
          muscularMassPercentage={results.muscularMassPercentage}
        />
      </div>
      
      <div className='w-[500px] mx-auto mt-4 rounded-xl'>
        <ChartComp 
          fatPercentage={results.fatPercentage}
          boneMassPercentage={results.boneMassPercentage}
          residualMassPercentage={results.residualMassPercentage}
          muscularMassPercentage={results.muscularMassPercentage}
        />
      </div>
    </div>
  )}
</div>
  );
};
