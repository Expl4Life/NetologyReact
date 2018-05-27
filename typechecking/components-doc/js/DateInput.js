'use strict';

const createChainableTypeChecker = (validate) => {
  const checkType = (isRequired, props, propName, componentName) => {
    if (props[propName] === undefined || props[propName] === null) {
      if (isRequired) {
        return new Error(`Обязательный атрибут ${propName}
          не был передан компоненту ${componentName}`);
      }
      return null;
    } else {
      return validate(props, propName, componentName);
    }
  };

  let chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
};

function isValidDate(dateString) {
  if(!dateString) return false;
  let regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!dateString.match(regEx)) return false;  // Invalid format
  let d = new Date(dateString);
  if(d > new Date()) return false; // Invalid date
  return d.toISOString().slice(0,10) === dateString;
}


const datePropType = (props, propName, componentName) => {
  let date = props[propName];
  let result = isValidDate(date);

  let isDate = (typeof date === 'string') && result;

  if (!isDate) {
    return new Error(`Неверный параметр ${propName} в компоненте
    ${componentName}: параметр должен иметь формат YYYY-MM-DD и иметь дату не больше текущей`);
  }
  // Если все хорошо
  return null;
};


const datePropTypeChecker = createChainableTypeChecker(datePropType);


const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: datePropTypeChecker.isRequired
};

DateInput.defaultProps = {
  value: new Date().toISOString().slice(0,10)
};