import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4 border-top">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/card" className="nav-link px-2 text-body-secondary">
              Card
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-body-secondary">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © 2024 sellspage.web.app limited
        </p>
      </footer>
    </div>
  );
};

export default Footer;
