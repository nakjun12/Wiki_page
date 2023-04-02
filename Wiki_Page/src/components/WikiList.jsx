import { useState } from "react";
import { calculatePageNumbers } from "../components/helper/Helper";
import MainList from "./MainList";

const WikiList = ({ wikiList, size = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, currentItems] = calculatePageNumbers(
    wikiList,
    currentPage
  );
  return (
    <>
      <div className="divide-y-2 divide-gray-100 bg-cyan-600">
        {currentItems.map((el) => {
          return (
            <MainList key={el.id} data={el} wikiList={wikiList} size={size} />
          );
        })}
      </div>
      <div className="mt-4">
        {pageNumbers.map((number) => {
          return (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={
                currentPage === number
                  ? "px-3 py-1 mx-1 bg-white rounded-full shadow-md hover:bg-gray-300  shadow-outline ring-2 ring-offset-current ring-offset-2"
                  : "px-3 py-1 mx-1 bg-white  rounded-full shadow-md hover:bg-gray-300 shadow-outline ring-2  "
              }
            >
              {number}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default WikiList;
