import { useParams } from "react-router-dom";
import Card from "./Card";
import { ITEMS } from "../data/items";

const ViewItem = () => {
  const { id } = useParams();

  const itemArr = ITEMS.filter((item) => item.id === id);

  return (
    <div className="p-2 w-25">
      {itemArr.length !== 0 &&
        itemArr.map((viewItem) => <Card key={viewItem.id} item={viewItem} />)}
    </div>
  );
};

export default ViewItem;
