'use strict';

const AuthForm = ({onAuth}) => {

  let nameInput, emailInput, passwordInput;

  const validateSymbol = {

    email(letter) {
      let re = /[a-zA-Z0-9@._-]/;
      return re.test(String(letter));
    },

    password(letter) {
      let re = /[a-zA-Z0-9@._]/;
      return re.test(String(letter));
    }
  };

  const inputHandler = event => {
    let statusSymbol = true;

    const field = event.currentTarget;
    const fieldType = field.getAttribute('type');
    const value = field.value;
    const lastLetter = value.slice(-1);
    const validateFunction = validateSymbol[fieldType];

    if(validateFunction) {
      statusSymbol = validateSymbol[fieldType](lastLetter);
    }

    if(!statusSymbol) {
      field.value = value.slice(0, -1);
    }
  };

  const formHandler = (e) => {
    if (typeof onAuth !== 'function') {
      return null;
    }

    e.preventDefault();

    let user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    };

    onAuth(user);
  };

  return (
    <form className="ModalForm"
          onSubmit={formHandler}
          action="/404/auth/"
          method="POST">
      <div className="Input">
        <input
          ref={(element) => nameInput = element}
          required
          type="text"
          placeholder="Имя"/>
        <label>
        </label>
      </div>
      <div className="Input">
        <input
          ref={(element) => emailInput = element}
          onChange={inputHandler}
          type="email"
          placeholder="Электронная почта"/>
        <label>
        </label>
      </div>
      <div className="Input">
        <input
          ref={(element) => passwordInput = element}
          onChange={inputHandler}
          required
          type="password"
          placeholder="Пароль"/>
        <label>
        </label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right">
        </i>
      </button>
    </form>
  )
};