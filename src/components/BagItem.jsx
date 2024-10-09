import { useDispatch } from "react-redux";
import styles from "./BagItem.module.css";
import { bagSliceActions } from "../store/bagSlice";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(bagSliceActions.removeFromBag(item.id));
  };

  return (
    <div className={`d-flex ${styles.bagItem} mb-2`} style={{ width: "95%" }}>
      <img
        src={item.image}
        className="me-3 object-fit-cover"
        width="110px"
        height="80%"
        alt="item"
        style={{ borderRadius: "0.5rem" }}
      />

      <div className="card-body">
        <h5 className="card-title">{item.company}</h5>
        <li className="nav-link">{item.item_name}</li>
        <li className="nav-link"> ₹{item.current_price}</li>
        <li className="nav-link">
          <span className="text-decoration-line-through">
            ₹{item.original_price}
          </span>
          ({item.discount_percentage}% off)
        </li>
        <li className="nav-link">{item.return_period} days return available</li>
        <li className="nav-link">Delivery by {item.delivery_date}</li>
      </div>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={handleRemoveItem}
      ></button>
    </div>
  );
};

export default BagItem;
