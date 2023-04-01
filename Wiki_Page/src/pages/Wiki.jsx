import { useLocation, useParams } from "react-router-dom";
import WikiList from "../components/WikiList";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const dbData = [
  {
    title: "감자",
    content: "<div>ㅇㅇㅇ <a href=`/wiki'>감자</a></div>",
    id: 1,
  },
  {
    title: "감자김치",
    content: "<p>ㅇㅇㅇ</p>",
    id: 2,
  },
  {
    title: "감자김치31111",
    content: "<p>ㅇㅇㅇ</p>",
    id: 3,
  },
  {
    title: "감자김치4111111111111",
    content: "<p>ㅇㅇㅇ</p>",
    id: 4,
  },
  {
    title: "감자김치511111111111111",
    content: "<p>ㅇㅇㅇ</p>",
    id: 5,
  },
  {
    title: "감자김치6",
    content: "<p>ㅇㅇㅇ</p>",
    id: 6,
  },
]; //위키 필터 돌려서 dbdata처럼 돌리자
const Wiki = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [wikiList, setwikiList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    if (location.state) {
      setwikiList(location.state.wikiList);
      setTitle(location.state.data.title);
      setContent(location.state.data.content);
    } else {
      fetch("http://localhost:3001/posts")
        .then((response) => response.json())
        .then((data) => {
          setwikiList(data);

          const idData = data.filter((el) => {
            return el.id === Number(id);
          });
          setTitle(idData[0].title);
          setContent(idData[0].content);
          console.log(idData);
        });
    }
  }, [location.state, id]);

  const handlerFix = () => {
    navigate("/editor", { state: { data: { title, content, id } } });
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <ButtonComponent word="수정" handler={handlerFix} />
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 bg-white text-gray-900 border-2 pb-3">
              {title}
            </h1>
            <div className="leading-relaxed text-base bg-white">{content}</div>
          </div>
        </div>
      </section>
      <WikiList wikiList={dbData} size="py-2" />
    </>
  );
};
export default Wiki;
