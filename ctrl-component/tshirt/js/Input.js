const Input = props => {
  return (
    <input
      type={props.type || 'text'}
      name={props.name}
      value={props.value}
      data-index={props.index}
      checked={props.checked}
      id={props.id}
      onChange={props.onChange}/>
  )
};