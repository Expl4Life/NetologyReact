function Menu() {
  let navItemActiveClassName = 'menu__item-active';
  let navItemClassName = 'menu__item';

  return (
    <nav className="menu">
      <NavLink exact to="/" className={navItemClassName} activeClassName={navItemActiveClassName}>
        Главная
      </NavLink>
      <NavLink to="/drift" className={navItemClassName} activeClassName={navItemActiveClassName}>
        Дрифт-такси
      </NavLink>
      <NavLink to="/timeattack" className={navItemClassName} activeClassName={navItemActiveClassName}>
        Time Attack
      </NavLink>
      <NavLink to="/forza" className={navItemClassName} activeClassName={navItemActiveClassName}>
        Forza Karting
      </NavLink>
    </nav>
  )
}