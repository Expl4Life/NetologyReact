const createStyle = (styleName = 'common', color, item, max, sortedItems, sum) => {
  let styles = {
    common: {
      backgroundColor: color,
      opacity: item / max + .05,
      zIndex: item,
      height: (item / (max) * 100) + '%'
    },
    stacked: {
      backgroundColor: color,
      opacity: 1,
      zIndex: item,
      height: (item / sum * 100) + '%'
    },
    layered: {
      backgroundColor: color,
      opacity: (item / max + .05),
      zIndex: item,
      height: (item / (max) * 100) + '%',
      right: ((sortedItems.indexOf(item) / (sortedItems.length + 1)) * 100) + '%'
    },
    horizontal: {
      backgroundColor: color,
      opacity: (item / max + .05),
      zIndex: item,
      width: (item / (max) * 100) + '%'
    }
  };

  return styles[styleName];
};


const Chart = (props) => {

  const {
    chartItems,
    sortedItems,
    key,
    max,
    label,
    colors,
    style,
    classModifier,
    sum
  } = props;

  return (
    <div className={`Charts--serie ${classModifier}`}
     key={key}
     style={style}
    >
      <Label title={label}/>

      {chartItems.map((item, itemIndex) => {
        let color = colors[itemIndex];
        let style = createStyle(classModifier, color, item, max, sortedItems, sum);

        return (
          <ChartItem
            item={item}
            classModifier={classModifier}
            style={style}
            key={itemIndex}
            color={color}
          />
        );
      })}
    </div>
  );
};