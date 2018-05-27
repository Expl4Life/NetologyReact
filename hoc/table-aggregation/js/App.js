'use strict';

const AgregatedMonthTable = agregateData(MonthTable, 'month');
const AgregatedYearTable = agregateData(YearTable, 'year');
const AgregatedSortTable = agregateData(SortTable, 'sort');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <AgregatedMonthTable list={this.state.list}/>
                <AgregatedYearTable list={this.state.list}/>
                <AgregatedSortTable list={this.state.list}/>
            </div>
        );
    }
};