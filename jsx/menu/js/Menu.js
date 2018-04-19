const Menu = ({items, opened}) => {

  if (!items) {
    return null;
  }

  let list;

  if (!items.length) {
    list = <li><a href="#">Список пуст</a></li>;
  } else {
    list = items.map((item, index) => {
      return (
        <li key={index}><a href={item.href}>{item.title}</a></li>
      )
    });
  }

  if (opened) {
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span></span></div>
        <nav>
          <ul>
            {list}
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div className="menu">
      <div className="menu-toggle"><span></span></div>
    </div>
  )
};