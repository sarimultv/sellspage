import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  console.log(items);

  let inputElement = useRef();
  const handleSearchBtn = () => {
    setTimeout(() => {
      let newFilterItem = items.filter(
        (item) => item.id === inputElement.current.value
      );
      console.log(newFilterItem);
    }, 4000);
  };

  return (
    <header className="p-3 text-bg-light">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/">
            <img
              className="bi me-2"
              width="40"
              height="32"
              src="images/myntra_logo.webp"
              alt="logo"
            />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/card" className="nav-link px-2 text-dark">
                Card
              </Link>
            </li>
            {/* <li>
              <Link to="/price" className="nav-link px-2 text-dark">
                Pricing
              </Link>
            </li> */}
            <li>
              <Link to="/about" className="nav-link px-2 text-dark">
                About
              </Link>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-light text-bg-light"
              placeholder="Search..."
              aria-label="Search"
              ref={inputElement}
              onChange={handleSearchBtn}
            />
          </form>

          <div className="text-end d-flex">
            {/* <span>
              <Link
                to="/profile"
                className="nav-link text-dark d-flex align-items-center me-2"
              >
                <IoPersonSharp />
                Profile
              </Link>
            </span>
            <span>
              <Link
                to="/wishlist"
                className="nav-link text-dark d-flex align-items-center me-2 "
              >
                <IoMdHeartEmpty />
                Wishlist
              </Link>
            </span> */}
            <span>
              <Link
                to="/bag"
                className="nav-link text-dark d-flex align-items-center"
              >
                <GiShoppingBag></GiShoppingBag>
                Bag
                <span className="mb-2 translate-middle badge rounded-pill bg-success">
                  {bag.length}
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
