const Card = ({ item }) => {
  return (
    <div className="col">
      <div className="card shadow-sm p-2 w-100 h-100">
        <img
          className="bd-placeholder-img card-img-top object-fit-cover"
          width="100%"
          height="225"
          src={"/" + item.image}
          alt="item"
        />

        <div className="card-body">
          <div className="card-title fw-bold">{item.company}</div>
          <div className="card-text">{item.item_name}</div>
          <div className="d-flex flex-wrap align-items-center justify-content-start">
            <span className="card-text me-3">₹{item.current_price}</span>
            <span className="card-text text-decoration-line-through me-3">
              ₹{item.original_price}
            </span>
            <span className="card-text">{item.discount_percentage}% off</span>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small className="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
