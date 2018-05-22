const FontSelector = props => {

  const selectHandler = e => {
    let fontIndex = Number(e.currentTarget.getAttribute('data-index'));
    let selectedFont = props.fonts[fontIndex];
    props.onSelect(selectedFont);
  };

  return (
    <div className="font-picker">
      {props.fonts && props.fonts.map((font, index) => {
        let checkedStatus = false;

        if (props.selected) {
          checkedStatus = font.name === props.selected.name;
        }
        return (
          <div className="grid center font-item">
            <Input
              type="radio"
              name="font"
              index={index}
              defaultChecked={checkedStatus}
              value={font.name}
              id={font.name}
              onChange={selectHandler}
            />
            <label htmlFor={font.name} className="grid-1">
              <PictureFont text="abc" path={font.path}/>
            </label>
          </div>
        )
      })}
    </div>
  )

};

FontSelector.propTypes = {
  fonts: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

FontSelector.defaultProps = {
  fonts: []
};
