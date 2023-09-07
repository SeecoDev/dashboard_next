const  TablePerrona = (props) => {

  const {fatPercentage, fatWeight, boneMassPercentage, boneMass, residualMass, residualMassPercentage, muscularWeight, muscularMassPercentage} = props;

  return (
    <div>
      <table className="w-full text-sm text-left">
        <thead className=" text-white uppercase bg-[#2176FF]">
          <tr>
            <th scope="col" className="px-6 py-1">
              Componente
            </th>
            <th scope="col" className="px-6 py-1">
              %
            </th>
            <th scope="col" className="px-6 py-1">
              Kg
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-1">Masa Grasa</td>
            <td className="px-6 py-1">{fatPercentage}</td>
            <td className="px-6 py-1">{fatWeight}</td>
          </tr>
          <tr>
            <td className="px-6 py-1">Masa Osea</td>
            <td className="px-6 py-1">{boneMassPercentage}</td>
            <td className="px-6 py-1">{boneMass}</td>
          </tr>
          <tr>
            <td className="px-6 py-1">Masa Residual</td>
            <td className="px-6 py-1">{residualMassPercentage}</td>
            <td className="px-6 py-1">{residualMass}</td>
          </tr>
          <tr>
            <td className="px-6 py-1">Masa Muscular</td>
            <td className="px-6 py-1">{muscularMassPercentage}</td>
            <td className="px-6 py-1">{muscularWeight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablePerrona;