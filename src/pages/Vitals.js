import React from 'react';
import Plot from 'react-plotly.js';


const data = {
    x: [1, 2, 3, 4, 5],
    y: [1, 4, 9, 16, 25],
    mode: 'markers',
    type: 'line',
    marker: {
      color: 'rgb(255, 0, 0)',
      size: 10,
    },
  };
  
  const data2 = {
    x: [1, 2, 3, 4, 5],
    y: [20, 3, 4, 10, 30],
    mode: 'markers',
    type: 'line',
    marker: {
      color: 'rgb(255, 0, 0)',
      size: 10,
    },
  };

  const layout1 = {
    title: 'Patient Happiness',
    xaxis: {
      title: 'days',
    },
    yaxis: {
      title: 'Happiness',
    },
  };

  const layout2 = {
    title: 'blodsugar',
    xaxis: {
      title: 'days',
    },
    yaxis: {
      title: 'mg',
    },
  };


function Vitals() {
    
    return (
      <div>
        <Plot
            data={[data]}
            layout={layout1}
            style={{ width: '100%', height: '100%' }}
            />
        <Plot
            data={[data2]}
            layout={layout2}
            style={{ width: '100%', height: '100%' }}
            />
      </div>
    );
}
export default Vitals;