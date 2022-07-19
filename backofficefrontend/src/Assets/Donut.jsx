import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Feminino', 'Masculino'],
        colors: ['#D66AA8', '#0076B2'],
        

       
        dataLabels: {
         
          
          textAnchor: 'middle',
       
        
          style: {
              fontSize: '14px',
              fontFamily:"'Roboto', sans-serif",
              fontWeight: 'normal'
                         
          },
         
         
        },

        legend: {
          show: true,

       
          offsetY: 70,

          labels: {
            colors: '#FFFFFF',
            useSeriesColors: false
          },
        
          },

     
     
        

        chart: {
          
          height: 250,

        },

        
       

      },
      series: [35, 40],
  }
}

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="400" />
      
</div>
   
    );

  }
}

export default Donut;
