import { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchCard from "./SearchCard";

const SearchUI = () => {
  const SearchedItem = useSelector((store) => store.searchItem.searchedItem);

  useEffect(() => {
    if (SearchedItem.length === 0) return;
  }, [SearchedItem]);

  return (
    <div className="p-2 card bg-light w-50">
      {SearchedItem.map((item) => (
        <SearchCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SearchUI;
