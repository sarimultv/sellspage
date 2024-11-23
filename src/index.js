import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./routes/Home";
import CardList from "./components/CardList";
import About from "./components/About";
import BagList from "./components/BagList";
import itemStore from "./store/myntra-store";
import { Provider } from "react-redux";
import SearchUI from "./components/SearchUI";
import ViewItem from "./components/ViewItem";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/card",
        element: <CardList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bag",
        element: <BagList />,
      },
      {
        path: "/search",
        element: <SearchUI />,
      },
      {
        path: "/itemView/:id",
        element: <ViewItem />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={itemStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
