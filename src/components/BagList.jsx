import { useSelector } from "react-redux";
import Bag from "./Bag";
import BagItem from "./BagItem";

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
        <Bag />;
      </div>
    </div>
  );
};

export default BagList;
