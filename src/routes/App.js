import { useSelector } from "react-redux";
import "../App.css";
import FetchStatus from "../components/FetchStatus";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import LoaderSpinning from "../components/LoaderSpinning";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchStatus />
      {fetchStatus.fetching ? <LoaderSpinning /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
