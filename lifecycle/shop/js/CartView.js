class CartView extends React.Component {
  constructor(...props) {
    super(...props);
  }

  shouldComponentUpdate(nextProps) {

    if(nextProps.items.length === 0) {
      return true;
    }

    if(nextProps.isOpen !== this.props.isOpen) {
      return true;
    }

    if (nextProps.items.length !== this.props.items.length && this.props.isOpen) {
      return true;
    }

    return false;
  }

  render() {
    const { items, isOpen, toggleCart, clearCart } = this.props;

    return (
      <section className="cart" onClick={() => toggleCart()}>
        <div>Корзина</div>
        <div className={`
          cart__content
          ${isOpen ? 'cart__content_show' : 'cart__content_hide'}
          ${!!items.length ? 'cart__content_full' : null}
        `}>
          {!!items.length &&
            <div>
              <ul>
                {items.map((item, i) =>
                  <li key={i}>{item.title} ({item.price} руб.)</li>
                )}
              </ul>
              <button onClick={() => clearCart()} className="cart__clear">Очистить корзину</button>
            </div>
          }
          {!items.length && <p className="cart__empty">Корзина пуста</p>}
        </div>
      </section>
    )
  }
}
