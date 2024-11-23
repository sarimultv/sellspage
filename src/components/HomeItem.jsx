import styles from "./Price.module.css";
import Price from "./Price";
import { useSelector } from "react-redux";

const HomeItem = () => {
  const items = useSelector((store) => store.items);

  return (
    <div
      className={`row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 ${styles.priceStyle}`}
    >
      {items.map((item) => {
        return <Price key={item.id} item={item} />;
      })}
    </div>
  );
};

export default HomeItem;
