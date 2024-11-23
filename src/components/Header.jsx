import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
  addSearchItems,
  hideSearchDiv,
  showSearchDiv,
} from "../store/searchSlice";
import SearchUI from "./SearchUI";

const Header = () => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const inputElement = useRef();

  const handleFocus = () => {
    dispatch(showSearchDiv());
  };

  const handleBlur = () => {
    setTimeout(() => {
      dispatch(hideSearchDiv());
    }, 200);
  };

  let timer;
  const handleSearchBtn = (evt) => {
    evt.preventDefault();

    clearTimeout(timer);

    timer = setTimeout(() => {
      const newFilterItem = items.filter((item) => {
        return (
          item.company
            .toLowerCase()
            .includes(inputElement.current.value.toLowerCase()) ||
          item.item_name
            .toLowerCase()
            .includes(inputElement.current.value.toLowerCase())
        );
      });
      dispatch(addSearchItems(newFilterItem));
    }, 3000);
  };

  const showDiv = useSelector((store) => store.searchItem.showDiv);

  return (
    <header className="p-3 text-bg-light">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/">
            <img
              className="bi me-2"
              width="40"
              height="32"
              src="/images/myntra_logo.webp"
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

            <li>
              <Link to="/about" className="nav-link px-2 text-dark">
                About
              </Link>
            </li>
            <Link
              to="/bag"
              className="nav-link text-dark d-flex align-items-center"
            >
              <li>
                <GiShoppingBag></GiShoppingBag>
                Bag
                <span className="mb-2 translate-middle badge rounded-pill bg-success">
                  {bag.length}
                </span>
              </li>
            </Link>
          </ul>

          <form
            className="form-floating col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 w-50 "
            // role="search"
            onSubmit={handleSearchBtn}
          >
            <input
              type="text"
              className="form-control  w-100"
              placeholder="Search Items"
              aria-label="Search"
              ref={inputElement}
              id={"searchItem"}
              onChange={handleSearchBtn}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label htmlFor="searchItem" className="">
              Search Items
            </label>

            {showDiv && (
              <div className="mx-4">
                <SearchUI />
              </div>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
