import { useSelector } from "react-redux";
import Bag from "./Bag";
import BagItem from "./BagItem";
import { Link } from "react-router-dom";

const BagList = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);

  const finalItem = items.filter((item) => {
    const itemIdx = bagItems.indexOf(item.id);
    return itemIdx >= 0;
  });

  return (
    <div className="row d-flex m-3">
      <div className="col-md-6 col-lg-8 col-sm-6">
        {finalItem.map((item) => {
          return <BagItem key={item.id} item={item} />;
        })}
      </div>
      <div className="col-md-6 col-lg-4 col-sm-6">
        {finalItem.length === 0 ? (
          <div className="py-4 d-flex align-items-center justify-content-center">
            <div>
              <p>Your cart is empty!</p>
              <Link to={"/"}>
                <input
                  type="button"
                  className="btn btn-primary py-1 px-8 fw-bold"
                  value={"Shop now"}
                />
              </Link>
            </div>
          </div>
        ) : (
          <Bag />
        )}
      </div>
    </div>
  );
};

export default BagList;
