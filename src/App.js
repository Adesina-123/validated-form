import React, {Component} from 'react';
import Chart from 'react-apexcharts';
import Barchart from './components/Barcharts'
import Piechart from './components/Piechart'
import LineGraph from './components/LineGraph'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="500"
          height="500"
        />
        <Barchart />
        <Piechart />
        <LineGraph />
      </div>
    );
  }
}

export default App;
