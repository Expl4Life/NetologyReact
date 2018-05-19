'use strict';

const checkFieldValue = (regexp = '') => {

  return function (event) {
    event.currentTarget.value = event.currentTarget.value.replace(regexp, '');
  }
};

const regExpData = {
  email: /[^\w@\.-]+/gi,
  password: /[^\w]+/gi
};

const AuthForm = ({onAuth}) => {

  const checkEmailValue = checkFieldValue(regExpData.email);
  const checkPasswordValue = checkFieldValue(regExpData.password);

  const formHandler = (e) => {
    e.preventDefault();

    if (!onAuth || typeof onAuth !== 'function') {
      return null;
    }

    const formElements = event.currentTarget.elements;

    const user = {
      name: formElements.name.value,
      email: formElements.email.value,
      password: formElements.password.value
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
          required
          name="name"
          type="text"
          placeholder="Имя"/>
        <label>
        </label>
      </div>
      <div className="Input">
        <input
          onChange={checkEmailValue}
          name="email"
          type="email"
          placeholder="Электронная почта"/>
        <label>
        </label>
      </div>
      <div className="Input">
        <input
          onChange={checkPasswordValue}
          name="password"
          required
          type="text"
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