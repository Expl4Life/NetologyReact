function Menu() {
  let navItemActiveClassName = 'tabs__item-active';
  let navItemClassName = 'tabs__item';

  return (
    <nav className="tabs__items">
      <NavLink exact to="/" className={navItemClassName} activeClassName={navItemActiveClassName}>
        Рефераты
      </NavLink>
      <NavLink to="/creator" className={navItemClassName} activeClassName={navItemActiveClassName}>
        Криэйтор
      </NavLink>
      <NavLink to="/fortune" className={navItemClassName} activeClassName={navItemActiveClassName}>
        Гадалка
      </NavLink>
    </nav>
  )
}