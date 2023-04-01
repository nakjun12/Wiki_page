import MainList from "../components/MainList";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const wikiList = [
  {
    id: 1,
    title: "안녕하세요",
    date: "20120210", //고민사안
    content: "오랫동안 행복하게 살고 있습니다.",
  },
  {
    id: 2,
    title: "김덕배입니다2222.",
    date: "20120213",
    content: "오랫동안 행복하게 살고 있습니다.",
  },
  {
    id: 3,
    title: "김덕배입니다3333.",
    date: "20120213",
    content: "오랫동안 행복하게 살고 있습니다.",
  },
  {
    id: 4,
    title: "김덕배입니다444.",
    date: "20120213",
    content: "오랫동안 행복하게 살고 있습니다.",
  },
  {
    id: 5,
    title: "김덕배입니다5555.",
    date: "20120213",
    content: "오랫동안 행복하게 살고 있습니다.",
  },
  {
    id: 6,
    title: "김덕배입니다666.",
    date: "20120213",
    content: "오랫동안 행복하게 살고 있습니다.",
  },
  {
    id: 7,
    title: "김덕배입니다777.",
    date: "20120213",
    content: "오랫동안 행복하게 살고 있습니다.",
  },
];

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLast = currentPage * itemsPerPage; // 마지막을 먼저 구함
  const indexOfFirst = indexOfLast - itemsPerPage; // 제거
  const currentItems = wikiList.slice(indexOfFirst, indexOfLast); // 슬라이스 활용

  const calculatePageNumbers = (wikiList, itemsPerPage) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(wikiList.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = calculatePageNumbers(wikiList, itemsPerPage);

  const handlerNav = () => {
    navigate("/editor");
  };

  return (
    <div>
      <section>
        <div className="flex justify-end">
          <Button handler={handlerNav} />
        </div>
        <div className="divide-y-2 divide-gray-100 bg-lime-700">
          {currentItems.map((el) => {
            return <MainList key={el.id} data={el} />;
          })}
        </div>
        <div>
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
      </section>
    </div>
  );
};

export default Main;
