import { useState } from 'react';
import './chart.css';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const data = {
    datasets: [{
        data: [8, 32, 29,20],
        backgroundColor:[
          'green',
          'blue',
          'red',
          'grey'
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Total Courses',
    'Student Registrations',
    'Total Admin',
    'Total Staffs'
  ], 
};
function Chart() {
  const [data, setData] = useState({
    datasets: [{
        data: [8, 32, 29,20],
        backgroundColor:[
          'green',
          'blue',
          'red',
          'grey'
        ]
    },
  ],
  labels: [
      'Total Courses',
      'Student Registrations',
      'Total Admin',
      'Total Staffs'
  ], 
});
  

  return (
    <div className='Chart' style={{alignItems:'center', width:'40%', height:'40%'}}>
            <br></br>
            <br></br>

      <h2 className="Chart-title">ICT LIVE STATUS</h2>
      <br></br>
      <Doughnut data={data}/>
    </div>
  );
}

export default Chart;