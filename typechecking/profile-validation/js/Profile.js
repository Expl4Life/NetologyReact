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
  let time = d.getTime();
  if(!time && time !== 0) return false; // Invalid date
  if(time > (new Date().getTime())) return false; // Invalid date
  return d.toISOString().slice(0,10) === dateString;
}

function isValidUrl(str) {
  let reg = /(https):\/\/(?:s|vk.com)(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  let pattern = new RegExp(reg);
  return pattern.test(str);
}


const urlPropType = (props, propName, componentName) => {
  let url = props[propName];
  let result = isValidUrl(url);

  let isUrl= (typeof url === 'string') && result;

  if (!isUrl) {
    return new Error(`Неверный параметр ${propName} в компоненте
    ${componentName}: параметр должен иметь формат https://vk.com/(id[0-9]+|[A-Za-z0-9_-]+)`);
  }
  // Если все хорошо
  return null;
};

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
const urlPropTypeChecker = createChainableTypeChecker(urlPropType);

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  ['first_name']: PropTypes.string.isRequired,
  ['last_name']: PropTypes.string,
  img: PropTypes.string.isRequired,
  birthday: datePropTypeChecker.isRequired,
  url: urlPropTypeChecker.isRequired,
};

Profile.defaultProps = {
  img: './images/profile.jpg'
};