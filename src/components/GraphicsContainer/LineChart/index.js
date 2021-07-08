import React from 'react';
import { Line } from 'react-chartjs-2';


export const LineChart = ({infected, deaths, recovered,dates}) => {
  
  
  const data = {
    labels: dates,
    datasets: [
      {
        label: `Infected`,
        data: infected,
        backgroundColor: 'rgba(216,58,86,0.2)',
        borderColor: 'rgba(216,58,86,1)',
        borderWidth: 1, 
        fill: '2',
      },
      {
        label: `Deaths`,
        data: deaths,
        backgroundColor:'rgba(91,86,86,0.2)',
        borderColor: 'rgba(91,86,86,1)',
        
        borderWidth: 1,
        fill: 'origin',
      },
      {
        label: `Recovered`,
        data: recovered,
        backgroundColor:'rgba(74,169,108,0.2)',
        borderColor:'rgba(74,169,108,1)',
        borderWidth: 1,
        fill: '1',
      }
    
    ],
}
    const lineOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return (
        <div  style={{margin: "10px"}}>
            <Line
                data={data} options={lineOptions} height={400} width={600}
            />
        </div>
    )
};
