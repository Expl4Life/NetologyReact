const HorizontalCharts = (props) => {

  let style = {height: 'auto'};
  let state = Object.assign({}, props.state);
  state.labels = state.series;

  return (
    <div>
      <Charts
        state={state}
        style={style}
        classType={'horizontal'}
      />

      <div className="Legend">
        {props.state.labels.map((label, labelIndex) => {
          return (
            <div>
              <span className="Legend--color"
                    style={{backgroundColor: props.state.colors[labelIndex % props.state.colors.length]}}/>
              <span className="Legend--label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
};