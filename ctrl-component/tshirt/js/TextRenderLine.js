class TextRenderLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    let value = e.currentTarget.value;

    value = this.formatString(value);
    this.props.onChange(value);
    this.setState({value});
  }

  formatString(value) {
    let re = /[^a-z\u0400 \r\n|\r|\n]/gi;
    value = value.replace(re, '');
    return value;
  }

  render() {
    return (
      <div>
        <div className={`type-text`}>
          <textarea
            onChange={this.onChangeHandler}
            value={this.state.value}
            name="text"
            id="font-text"
            cols="30"
            rows="2"
            placeholder="Введите текст для футболки">
          </textarea>
        </div>
        <div className="type-text">
          Наберите текст
        </div>
      </div>
    )
  }
}
