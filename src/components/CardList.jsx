import styles from "./Card.module.css";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardList = () => {
  const items = useSelector((store) => store.items);

  return (
    <div
      className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ${styles.cardStyle}`}
    >
      {items.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CardList;
