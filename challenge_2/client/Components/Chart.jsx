import React from "react";
import Chart from "chart.js";

class Chart1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.myRef = React.createRef();
  }

  render() {

      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
          type: 'line',
      
          data: {
              labels: Object.keys(this.props.bpi),
              datasets: [{
                  label: 'BPI',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: Object.values(this.props.bpi),
              }]
          },
          options: {}
      });
    // }
    return (
      <React.Fragment>
        <div></div>
      </React.Fragment>
    )
  }
}

export default Chart1;