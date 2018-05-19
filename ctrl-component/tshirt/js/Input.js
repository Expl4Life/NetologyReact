const Input = props => {

  return (
    <input
      type={props.type || 'text'}
      name={props.name}
      value={props.value}
      data-index={props.index}
      defaultChecked={props.defaultChecked}
      id={props.id}
      onChange={props.onChange}/>
  )
};