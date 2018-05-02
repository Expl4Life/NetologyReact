const StackedCharts = (props) => {
  let style = {height: 250};

  return (
    <Charts
      state={props.state}
      style={style}
      classType={'stacked'}
    />
  )
};