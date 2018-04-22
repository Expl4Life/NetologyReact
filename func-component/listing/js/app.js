'use strict';

const renderComponent = (jsonList) => {
  ReactDOM.render(
    <Listing items={jsonList}/>,
    document.getElementById('root')
  );
};

fetch('https://neto-api.herokuapp.com/etsy')
  .then((response) => {
    return response.json();
  })
  .then((jsonList) => {
    renderComponent(jsonList);
  })
  .catch(() => {
    console.error('error');
  });


const setItemClass = (quantity) => {
  let mainClass = 'item-quantity level';

  if (quantity < 10) {
    return `${mainClass}-low`;
  }

  if (quantity < 20) {
    return `${mainClass}-medium`;
  }

  return `${mainClass}-high`;
};

const editTitle = (title) => {
  let outputTitle;

  if (title.length > 50) {
    outputTitle = `${title.slice(50)}...`;
    return outputTitle;
  }

  return title;
};


const editCurrency = (price, cur) => {
  let outputPrice;

  if (cur === 'USD') {
    return outputPrice = `$${price}`
  }

  if (cur === 'EUR') {
    return outputPrice = `€${price}`
  }

  return `${price} ${cur}`;
};

const Listing = ({items}) => {

  const shopItems = items.map(item => (
    <div key={item['listing_id']} className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item['MainImage']['url_570xN']}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{editTitle(item.title)}</p>
        <p className="item-price">{editCurrency(item.price, item['currency_code'])}</p>
        <p className={setItemClass(item.quantity)}>{item.quantity}</p>
      </div>
    </div>
  ));

  return (
    <div className="item-list">
      {shopItems}
    </div>
  )
};