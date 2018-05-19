'use strict';

const FeedbackForm = ({data, onSubmit}) => {

  let nameInput, emailInput, subjectSelect, messageTextArea;

  const saveForm = (form) => {
    let formData = new FormData(form);

    let data = {
      email: emailInput.value,
      message: messageTextArea.value,
      name: nameInput.value,
      salutation: formData.get('salutation'),
      snacks: formData.getAll('snacks'),
      subject: subjectSelect.value
    };

    return JSON.stringify(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let JSONData = saveForm(form);
    onSubmit(JSONData);
  };

  return (
    <form className="content__form contact-form" onSubmit={submitHandler}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group">
        <input className="contact-form__input contact-form__input--radio"
               defaultChecked={data.salutation === 'Мистер'}
               id="salutation-mr"
               name="salutation"
               type="radio"
               value="Мистер"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input className="contact-form__input contact-form__input--radio"
               defaultChecked={data.salutation === 'Мисис'}
               id="salutation-mrs"
               name="salutation"
               type="radio"
               value="Мисис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input className="contact-form__input contact-form__input--radio"
               defaultChecked={data.salutation === 'Мис'}
               id="salutation-ms"
               name="salutation"
               type="radio"
               value="Мис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input className="contact-form__input contact-form__input--text"
               ref={element => nameInput = element}
               defaultValue={data.name}
               id="name"
               name="name"
               type="text"/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email"
               ref={element => emailInput = element}
               defaultValue={data.email}
               id="email"
               name="email"
               type="email"/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select
          defaultValue={data.subject}
          ref={element => subjectSelect = element}
          className="contact-form__input contact-form__input--select"
          id="subject"
          name="subject">
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea
          defaultValue={data.message}
          ref={element => messageTextArea = element}
          className="contact-form__input contact-form__input--textarea"
          id="message"
          name="message"
          rows="6"
          cols="65">
        </textarea>
      </div>
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox"
               defaultChecked={data.snacks.includes('пицца')}
               id="snacks-pizza"
               name="snacks"
               type="checkbox"
               value="пицца"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox"
               defaultChecked={data.snacks.includes('пирог')}
               id="snacks-cake"
               name="snacks"
               type="checkbox"
               value="пирог"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result"/>
    </form>
  )
};
