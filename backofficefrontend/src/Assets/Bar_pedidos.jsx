import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Bar5_atrasos extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: 'Pessoas',
        data: [40, 60, 57, 75, 80, 67, 85, 66, 48, 58, 58, 48],
        
        
     
      }],
      options: {
        colors: ['#DDB201'], 

        chart: {
          type: 'bar',
          
          height: 250,

   
          toolbar: {
            show: false,
          }


        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '80%',
            endingShape: 'rounded',
            
            
            
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
          labels:{
            style:{
              colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
            }
          },
        },
        yaxis: {

          min: 0,
          max: 90,
          labels:{
            style:{
              colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
            }
          },
          
          title: {

            text: '',
            
            offsetX: -10,
            
            
            style: {
              fontSize:  '21px',
              fontWeight:  'bold',
              fontFamily:  "Roboto', sans-serif",
              color: "#FFFFFF" 
            },
           

          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " min"
            }
          }
        }
      },
    
      
    
    };
  }

  render() {

    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="bar" width="450"/>
      </div>
    );
  }
}

export default Bar5_atrasos;
