const ChartItem = (props) => {
  const {item, classModifier, style, itemIndex, color} = props;

  return (
    <div
      className={`Charts--item ${classModifier}`}
      style={style}
      key={itemIndex}
    >
      <b style={{color: color}}>{item}</b>
    </div>
  );
};