const formatString = (value) => {
  let re = /[^a-z\u0400 \r\n|\r|\n]/gi;
  value = value.replace(re, '').toLowerCase();
  return value;
};

const TextRenderLine = props => {

  const onChangeHandler = (e) => {
    let value = e.currentTarget.value;

    value = formatString(value);
    props.onChange(value);
  };

  return (
    <div>
      <div className={`type-text`}>
        <textarea
          onChange={onChangeHandler}
          value={props.value}
          name="text"
          id="font-text"
          cols="30"
          rows="2"
          placeholder="Введите текст для футболки">
        </textarea>
      </div>
      <div className="type-text">
        Наберите текст
      </div>
    </div>
  )
};
