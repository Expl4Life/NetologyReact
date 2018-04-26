'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardView: true,
      viewType: VIEW_LIST
    };

    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch() {
    let cardView = !this.state.cardView;
    let viewType = cardView? VIEW_LIST : VIEW_MODULE;
    this.setState({cardView, viewType});
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.viewType}
            onSwitch={this.onSwitch} />
        </div>
        {this.renderLayout(this.state.cardView)}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
