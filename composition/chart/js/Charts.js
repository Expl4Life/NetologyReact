const Charts = (props) => {

  const {data, colors, labels} = props.state;
  const classType = props.classType;
  const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
  const style = props.style;

  const chartList = data.map((serie, serieIndex) => {
    let sortedSerie = serie.slice(0), sum;
    sum = serie.reduce((carry, current) => carry + current, 0);
    sortedSerie.sort(compareNumbers);

    return (
      <Chart
        chartItems={serie}
        sortedItems={sortedSerie}
        key={serieIndex}
        max={max}
        label={labels[serieIndex]}
        colors={colors}
        style={style}
        classModifier={classType}
        sum={sum}
      />
    );
  });

  return (
    <div className={`Charts ${classType}`}>
      {chartList}
    </div>
  )
};