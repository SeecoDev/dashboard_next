import React, { useEffect, useRef} from 'react'
import { Chart } from 'chart.js/auto';

const ChartComp = (props) => {
  
  const chartRef = useRef(null);

    useEffect(() => {
      const {fatPercentage, boneMassPercentage, residualMassPercentage, muscularMassPercentage} = props
    
    const ctx = document.getElementById('chartComp');

    if (chartRef.current) {
      chartRef.current.destroy();
    }
  
     const newChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Masa grasa', 'Masas ósea', 'Masa residual', 'Masa muscular'],
        datasets: [{
          label: 'Porcentaje respecto al peso',
          data: [fatPercentage, boneMassPercentage, residualMassPercentage, muscularMassPercentage],
          backgroundColor: [
            '#1D3354',
            '#467599',
            '#467599',
            '#E9FFF9',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    chartRef.current = newChart;
    }, [props ])
    
    
  return (
      <canvas id='chartComp' width='300' height='300'></canvas>
  )
}

export default ChartComp;


/*

*/