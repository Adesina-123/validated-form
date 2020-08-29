import React, { Component } from 'react'
import Chart from 'react-apexcharts';





class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>)
    }
}



class AexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 33],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }],
          legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
          }
        },
      
      
      };
    }

  
    appendData() {
      var arr = this.state.series.slice()
      arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    
      this.setState({
        series: arr
      })
    }
    
    removeData() {
      if(this.state.series.length === 1) return
      
      var arr = this.state.series.slice()
      arr.pop()
    
      this.setState({
        series: arr
      })
    }
    
    randomize() {
      this.setState({
        series: this.state.series.map(function() {
          return Math.floor(Math.random() * (100 - 1 + 1)) + 1
        })
      })
    }
    
    reset() {
      this.setState({
        series: [44, 55, 13, 33]
      })
    }
  

    render() {
      return (
        

  <div>
<div class="chart-wrap">
<div id="chart">
<Chart options={this.state.options} series={this.state.series} type="donut" width={380} />
</div>
</div>

<div class="actions">
<button
    
    onClick={() => this.appendData()}
    >
  + ADD
</button>
&nbsp;
<button
    
    onClick={() => this.removeData()}
    >
  - REMOVE
</button>
&nbsp;
<button
    
    onClick={() => this.randomize()}
    >
  RANDOMIZE
</button>
&nbsp;
<button
    
    onClick={() => this.reset()}
    >
  RESET
</button>
</div>
</div>


      );
    }
  }


class Piechart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            series: [44, 55, 41, 17, 15],
            options: {
                chart: {
                  width: 380,
                  type: 'donut',
                  dropShadow: {
                    enabled: true,
                    color: '#111',
                    top: -1,
                    left: 3,
                    blur: 3,
                    opacity: 0.2
                  }
                },
                stroke: {
                    width: 0,
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        labels: {
                          show: true,
                          total: {
                            showAlways: true,
                            show: true
                          }
                        }
                      }
                    }
                  },
                  labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
                  dataLabels: {
                    dropShadow: {
                      blur: 3,
                      opacity: 0.8
                    }
                  },
                  fill: {
                    type: 'pattern',
                      opacity: 1,
                      pattern: {
                        enabled: true,
                        style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
                      },
                    },
                    states: {
                        hover: {
                          filter: 'none'
                        }
                      },
                      theme: {
                        palette: 'palette2'
                      },
                      title: {
                        text: "Favourite Movie Type"
                      },
                      responsive: [{
                        breakpoint: 480,
                        options: {
                          chart: {
                            width: 200
                          },
                          legend: {
                            position: 'bottom'
                          }
                        }
                      }]
                    },
         
         }
    }
    render() { 
        return ( 
            
      <div id="chart">
      <Chart options={this.state.options} series={this.state.series} type="donut" width={380} />
      <ApexChart/>
      <AexChart />
    </div>
         );
    }
}
 
export default Piechart;