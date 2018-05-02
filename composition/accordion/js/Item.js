class Item extends React.Component {
  constructor(props) {
    super(props);

    this.status = this.props.status;
    this.state = {
      statusClass: this.status ? 'open' : ''
    };

    this.onClick = this.onClick.bind(this);

  }

  toggleClass() {
    this.status = !this.status;

    this.setState ({
      statusClass: this.status ? 'open' : ''
    });
  }

  onClick() {
    this.toggleClass();
  }

  render() {
    let info = this.props.info;

    return (
      <section key={this.props.key} className={`section ${this.state.statusClass}`}>
        <button onClick={this.onClick}>toggle</button>
        <h3 onClick={this.onClick} className="sectionhead">{info.title}</h3>
        <div className="articlewrap">
          <div className="article">
            {info.text}
          </div>
        </div>
      </section>
    )
  }
}