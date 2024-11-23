import { useSelector } from "react-redux";
import "../App.css";
import FetchStatus from "../components/FetchStatus";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import LoaderSpinning from "../components/LoaderSpinning";
import SearchUI from "../components/SearchUI";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const showDiv = useSelector((store) => store.searchItem.showDiv);
  return (
    <>
      <Header />
      {showDiv && (
        <div className="mx-4 mx-auto d-block">
          <SearchUI />
        </div>
      )}
      <FetchStatus />
      {fetchStatus.fetching ? <LoaderSpinning /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
