import './styles.css';

const Menu = () => {
  return (
    <nav className="container menu__container">
      <input type="checkbox" id="menu__toggle" className="menu__toggle" />
      <div className="menu__logo">
        <div>
          <img src="/assets/images/logo.svg" alt="Pokémon Unite" />
        </div>
        <label htmlFor="menu__toggle" className="icon">
          <img src="/assets/images/hamburguer.svg" />
        </label>
      </div>
      <ul className="menu">
        <li className="menu__item menu__item--active">
          <a href="/" className="menu__link">Página INICIAL</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Nintendo Switch</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Google Play</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">App Store</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu