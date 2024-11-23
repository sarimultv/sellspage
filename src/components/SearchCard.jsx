import { Link } from "react-router-dom";

const SearchCard = ({ item }) => {
  return (
    <Link to={`/itemView/${item.id}`}>
      <div
        className="col border-bottom py-1 list-group-item-action list-group-item-light"
        role="button"
      >
        <div className="d-flex gap-1">
          <div className="">
            <img
              className="card-img-left object-fit-cover"
              width={"30"}
              height={"30"}
              src={item.image}
              alt="item"
            />
          </div>
          <span className="card-title fw-bold">{item.company}</span>
          <span className="card-text">{item.item_name}</span>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
