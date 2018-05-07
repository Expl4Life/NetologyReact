class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let value = e.currentTarget.value;
    this.props.filterBooks(value);
  }

  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.onChange}
        type="text"
        placeholder="Поиск по названию или автору"
      />
    );
  }
}