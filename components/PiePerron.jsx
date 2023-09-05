import React from 'react';
import { Pie } from 'react-chartjs-2';


const PieComponent = (props) => {

    const {imc, masaOseaPorcentaje, masaResidualPorcentaje, masaMuscularPorcentaje} = props;
    const data = {
        labels: [
          'Porcentaje de Grasa',
          'Masa Osea',
          'Masa Residual',
          'Masa Muscular'
        ],
        datasets: [{
          label: 'Porcentaje de peso (%)',
          data: [imc, masaOseaPorcentaje, masaResidualPorcentaje, masaMuscularPorcentaje],
          backgroundColor: [
            '#2F7FFF',
            '#3F88FF',
            '#4F92FF',
            '#5F9CFF',
          ],
          hoverOffset: 4
        }]
      };

      return (
        <div>
            <h1>Porcentaje del peso</h1>
            <Pie data={data}></Pie>
        </div>
      );
      
}

export default PieComponent;
