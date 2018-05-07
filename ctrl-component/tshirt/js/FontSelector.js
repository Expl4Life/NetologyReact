class FontSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };

    this.selectHandler = this.selectHandler.bind(this);
  }

  selectHandler(e) {
    let fontIndex = Number(e.currentTarget.getAttribute('data-index'));
    let selectedFont = this.props.fonts[fontIndex];

    this.props.onSelect(selectedFont);
    this.setState({selected: true});
  }

  render() {
    return (
      <div className="font-picker">

        {this.props.fonts.map((font, index) => {
          let checked = false;
          if(this.props.selectedFont && this.props.selectedFont.name === font.name) {
            checked = true;
          }
          return (
            <div className="grid center font-item">
              <Input
                type="radio"
                name={font.name}
                value={font.name}
                id={font.name}
                checked={checked}
                onChange={this.selectHandler}
              />
              <label htmlFor={font.name} className="grid-1">
                <PictureFont text="abc" path={font.path}/>
              </label>
            </div>
          )
        })}
      </div>
    )
  }
}


FontSelector.propTypes = {
  fonts: PropTypes.array,
  onSelect: PropTypes.func
};