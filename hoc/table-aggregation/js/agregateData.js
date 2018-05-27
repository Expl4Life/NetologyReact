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
            let list = data.map((item) => {
                let date = new Date(item.date),
                    locale = 'en-us',
                    month = date.toLocaleString(locale, {month: 'short'});
                return {
                    amount: item.amount,
                    month
                };
            });

            this.setState({list});
        }

        yearMethod(data) {
            let list = data.map((item) => {
                return {
                    amount: item.amount,
                    year: new Date(item.date).getFullYear()
                };
            });

            this.setState({list});
        }

        sortMethod(data) {
            let sortedList = data.sort((item1, item2) => {

                return (new Date(item2.date) - new Date(item1.date));
            });

            this.setState({
                list: sortedList
            });
        }

        render() {
            const props = {};

            if(this.state.list.length) {
                props.list = this.state.list;
            }

            return <Component {...this.props} {...props}/>;
        }
    }
}