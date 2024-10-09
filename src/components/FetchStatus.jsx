import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../store/ItemSlice";
import { fetchStatusSliceActions } from "../store/fetchStatusSlice";
import { ITEMS } from "../data/items";

const FetchStatus = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchingDone) return;

    dispatch(fetchStatusSliceActions.markFetchingStarted());
    dispatch(itemSliceActions.addInitialItems(ITEMS));
    dispatch(fetchStatusSliceActions.markFetchingDone());
    dispatch(fetchStatusSliceActions.markFetchingFinished());
    // fetch("http://localhost:8080/items")
    //   .then((res) => res.json())
    //   .then(({ items }) => {
    //     dispatch(itemSliceActions.addInitialItems(items));
    //     dispatch(fetchStatusSliceActions.markFetchingDone());
    //     dispatch(fetchStatusSliceActions.markFetchingFinished());
    //   });
  }, []);
  return <></>;
};

export default FetchStatus;
