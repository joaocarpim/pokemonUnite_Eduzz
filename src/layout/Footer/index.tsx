import './styles.css';
export const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__image" src="/assets/images/logo.svg" alt="Pokémon Unite" />
      <a href="" className="footer__button button__link">
        Jogue Pokémon Unite agora!
      </a>
      <div className="footer__links">
        <a href="#" className="footer__link">Google Play</a>
        <a href="#" className="footer__link">Nintendo Switch</a>
        <a href="#" className="footer__link">App Store</a>
      </div>
    </footer>
  );
}
