class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };

    this.searchElement = null;
    this.offsetTop = 0;
    
    this.isFixed = this.isFixed.bind(this);
    this.getElement = this.getElement.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} getElement={this.getElement} />
  }

  isFixed() {
    let yOffset = window.pageYOffset;

    return (yOffset < this.offsetTop ? false : true);
  }

  getElement(element) {
    this.searchElement = element;
  }

  componentDidMount() {
    this.offsetTop = this.searchElement.offsetTop;

    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  setPosition() {
    let fixedStatus = this.isFixed();

    if(this.state.fixed === fixedStatus) {
      return;
    }

    this.setState({
      fixed: fixedStatus
    });
  }
}
