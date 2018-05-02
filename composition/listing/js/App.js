'use strict';

const App = ({items}) => (
  <main>
    {items.map(item => {
      switch(item.type) {
        case 'unisex':
          return <BlackItem item={item}/>;
        case 'male':
          return <BlueItem item={item}/>;
        case 'female':
          return <OrangeItem item={item}/>;
      }
    })}
  </main>
);
