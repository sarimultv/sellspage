import { TiDelete } from "react-icons/ti";
import { MdLibraryAdd } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import { Link } from "react-router-dom";

const Price = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagSliceActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagSliceActions.removeFromBag(item.id));
  };

  const bagItem = useSelector((store) => store.bag);
  const foundElement = bagItem.indexOf(item.id) >= 0;

  return (
    <div className="col">
      <div className="card w-100 h-100 p-1 shadow-sm">
        <img
          className="card-img-top object-fit-cover"
          src={item.image}
          alt="price"
          width={"100%"}
          height={"200px"}
        />
        <div className="card-body p-2">
          <div className="card-text d-flex align-items-center">
            <button className="btn btn-success rating d-flex align-items-center justify-content-center me-2">
              {item.rating.stars}
              <GoStarFill />
            </button>
            {item.rating.count}
          </div>
          <Link
            to={`/itemView/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card-title company-name mt-2 fw-bold">
              {item.company}
            </div>

            <div className="card-text item-name">{item.item_name}</div>
            <div className="card-text price">
              <span className="card-text current-price me-3">
                ₹{item.current_price}
              </span>
              <span className="card-text original-price me-3 text-decoration-line-through">
                ₹{item.original_price}
              </span>
              <span className="card-text discount">
                ({item.discount_percentage}% off)
              </span>
            </div>
          </Link>
        </div>
        {foundElement && (
          <button
            className="btn btn-danger btn-lg btn-block mb-1"
            onClick={handleRemoveFromBag}
          >
            <TiDelete />
            Remove
          </button>
        )}
        {!foundElement && (
          <button
            className="btn btn-success btn-lg btn-block mb-1"
            onClick={handleAddToBag}
          >
            <MdLibraryAdd />
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default Price;
