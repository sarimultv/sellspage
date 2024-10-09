import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Oops..!</h1>
            <p className="lead text-body-secondary">
              <i>
                {err.status} {err.statusText}
              </i>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
