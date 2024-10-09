const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner mt-5">
      <div
        className="spinner-grow text-info"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
