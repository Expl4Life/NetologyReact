function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    };

    this.populateArray = this.populateArray.bind(this);
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray, 2000);
  }

  populateArray() {
    const series = this.state.series.length;
    const serieLength = this.state.series.length;
    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));
    this.setState({data});
  }

  render() {
    return (
      <ChartTypes state={{...this.state}}/>
    );
  }
}
