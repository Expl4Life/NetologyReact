class FontSelector extends React.Component {
  constructor(props) {
    super(props);

    this.selectHandler = this.selectHandler.bind(this);
  }

  componentDidMount() {
    this.setFont(this.props.selectedFont)
  }

  selectHandler(e) {
    let fontIndex = Number(e.currentTarget.getAttribute('data-index'));
    let selectedFont = this.props.fonts[fontIndex];
    this.setFont(selectedFont);
  }

  setFont(font) {
    if(!font) {return null;}

    this.props.onSelect(font);
  }

  render() {
    return (
      <div className="font-picker">

        {this.props.fonts.map((font, index) => {
          return (
            <div className="grid center font-item">
              <Input
                type="radio"
                name="font"
                index={index}
                value={font.name}
                id={font.name}
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

  static get PropTypes() {
    return {
      fonts: PropTypes.array.isRequired,
      onSelect: PropTypes.func.isRequired
    }
  }

  static get defaultProps() {
    return {
      fonts: [],
    };
  }
}
