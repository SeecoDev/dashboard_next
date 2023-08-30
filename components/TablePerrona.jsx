const  TablePerrona = (props) => {

  const {porcentajeGrasaKg, imc, masaOseaPorcentaje, masaOsea, masaResidual, masaResidualPorcentaje, masaMusuclarKg, masaMuscularPorcentaje} = props;

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
            <td className="px-6 py-1">{imc}</td>
            <td className="px-6 py-1">{porcentajeGrasaKg}</td>
          </tr>
          <tr>
            <td className="px-6 py-1">Masa Osea</td>
            <td className="px-6 py-1">{masaOseaPorcentaje}</td>
            <td className="px-6 py-1">{masaOsea}</td>
          </tr>
          <tr>
            <td className="px-6 py-1">Masa Residual</td>
            <td className="px-6 py-1">{masaResidualPorcentaje}</td>
            <td className="px-6 py-1">{masaResidual}</td>
          </tr>
          <tr>
            <td className="px-6 py-1">Masa Muscular</td>
            <td className="px-6 py-1">{masaMuscularPorcentaje}</td>
            <td className="px-6 py-1">{masaMusuclarKg}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablePerrona;