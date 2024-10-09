import { useSelector } from "react-redux";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItemIds = useSelector((store) => store.bag);

  const finalItem = items.filter((item) => {
    const itemIdx = bagItemIds.indexOf(item.id);
    return itemIdx >= 0;
  });

  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  const Convenience_fees = 99;

  finalItem.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + Convenience_fees;

  return (
    <div className="card" style={{ width: "95%" }}>
      <div className="card-body">
        <span>PRICE DETAILS ({totalItem} Items)</span>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Price</span>
          <span>₹{totalMRP}</span>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <span>Discount on MRP</span>
          <span>₹{totalDiscount}</span>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <span>Convenience Fee</span>
          <span>₹99</span>
        </div>
        <div className="border-bottom mt-3 mb-3"></div>
        <div className="d-flex justify-content-between fw-bold">
          <span>Total Payable</span>
          <span>₹{finalPayment}</span>
        </div>
      </div>
      <p className="text-center">
        <a className="btn btn-secondary">Place Order</a>
      </p>
    </div>
  );
};

export default Bag;
