class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formClass: ''
    };

    this.emailTimeOut = null;
    this.delayInputTime = 1000;
    this.emailValidStatus = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }

  handleSubmit(e) {
    // можно присвоить атрибут required для поля email,
    // тогда будет нативное уведомление о статусе валидности
    if (!this.emailValidStatus) {
      e.preventDefault();
    }
  }

  changeEmail(event) {
    clearTimeout(this.emailTimeOut);

    let input = event.currentTarget;
    this.emailValidStatus = input.validity.valid;
    let formClass = this.emailValidStatus ? 'is-valid' : 'is-error';

    if (this.emailValidStatus) {

      this.setState({
        formClass: formClass
      });

      return;
    }

    this.emailTimeOut = setTimeout(() => {
      this.setState({
        formClass: formClass
      });
    }, this.delayInputTime);

  };

  render() {
    return (
      <div className="subscribe__form">
        <form
          onSubmit={this.handleSubmit}
          className={`form form--subscribe ${this.state.formClass}`}
        >
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">Email</label>
            <input
              type="email"
              id="input-email"
              placeholder="Email"
              className="form-control"
              onChange={this.changeEmail}
            />
            <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
