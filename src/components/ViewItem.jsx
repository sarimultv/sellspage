import { useParams } from "react-router-dom";
import Card from "./Card";
import { ITEMS } from "../data/items";

const ViewItem = () => {
  const { id } = useParams();

  const itemArr = ITEMS.filter((item) => item.id === id);

  return (
    itemArr &&
    itemArr.map((viewItem) => <Card key={viewItem.id} item={viewItem} />)
  );
};

export default ViewItem;
