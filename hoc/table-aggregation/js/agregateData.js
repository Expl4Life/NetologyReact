function agregateData(Component, propName = '') {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                list: []
            };
            this.agregateMethods = {
                month: this.monthMethod,
                year: this.yearMethod,
                sort: this.sortMethod
            };

            this.propName = propName;
        }

        componentDidMount() {
            this.props.list && this.editData(this.propName, this.props.list);
        }

        componentWillReceiveProps(nextProps) {
            nextProps.list && this.editData(this.propName, nextProps.list);
        }

        editData(propName, data) {
            if (!this.agregateMethods[propName]) {
                return;
            }
            this.agregateMethods[propName].bind(this)(data);
        }

        monthMethod(data) {
            let sortedList = this.sortFromMaxToMin(data);

            if (!sortedList || !sortedList.length) {
                return;
            }

            let lastYear = sortedList[0].date && new Date(sortedList[0].date).getFullYear();
            if (!lastYear) {
                return;
            }

            let monthList = [];


            sortedList.forEach((item) => {
                let year = new Date(item.date).getFullYear();
                if(year < lastYear) {
                    return;
                }

                let date = new Date(item.date);
                let locale = 'en-us';
                let month = date.getMonth();
                let monthStr = date.toLocaleString(locale, {month: 'short'});
                if(monthList[month]) {
                    monthList[month].amount += item.amount;
                } else {
                   monthList[month] = {
                       month: monthStr,
                       amount: item.amount
                   }
                }

            });

            this.setState({
                list: monthList
            });
        }

        yearMethod(data) {
            let sortedList = this.sortFromMaxToMin(data);

            if (!sortedList || !sortedList.length) {
                return;
            }

            let lastYear = sortedList[0].date && new Date(sortedList[0].date).getFullYear();
            if (!lastYear) {
                return;
            }

            const yearListObj = sortedList.reduce((newList, item) => {
                const date = new Date(item.date);
                const year = date.getFullYear();
                newList[year] = (newList[year]) ? newList[year] + item.amount : item.amount;
                return newList;
            }, {});

            const yearList = Object.keys(yearListObj)
                .sort((year1, year2) => +year1 > +year2)
                .map(year => {
                    return {year: year, amount: yearListObj[year]};
                });

            this.setState({
                list: yearList
            });
        };

        sortMethod(data) {
            if (!data.length) {
                return null;
            }
            let sortedList = this.sortFromMaxToMin(data);

            this.setState({
                list: sortedList
            });
        }

        sortFromMaxToMin(data) {
            return data.sort((item1, item2) => {
                return (new Date(item2.date) - new Date(item1.date));
            });
        }

        render() {
            const props = {};

            if (this.state.list.length) {
                props.list = this.state.list;
            }

            return <Component {...this.props} {...props}/>;
        }
    }
}