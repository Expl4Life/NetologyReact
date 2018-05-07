const Input = props => {
    return (
      <input
        type={props.type || 'text'}
        name={props.name}
        value={props.value}
        checked={props.checked}
        id={props.id}
        onChange={props.onChange} />
    )
};