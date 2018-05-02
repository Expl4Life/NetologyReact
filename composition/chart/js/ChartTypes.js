const ChartTypes = (props) => {
  let state = {...props.state};

  return (
    <section>
      <CommonCharts state={state}/>
      <StackedCharts state={state}/>
      <LayeredCharts state={state}/>
      <HorizontalCharts state={state}/>
    </section>
  )
};