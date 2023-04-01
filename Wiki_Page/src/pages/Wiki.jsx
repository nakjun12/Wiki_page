import { useLocation } from "react-router-dom";
import WikiList from "../components/WikiList";
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
  const location = useLocation();
  const { wikiList, data } = location.state;
  // 그냥 url로 접근했을때 문제도 해결할 것
  const { title, content } = data;

  console.log(content, typeof content);
  // const navigate = useNavigate();
  // if (!) {
  //   navigate("/");
  //   return <></>;
  // }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {title}
            </h1>
            <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </section>
      <WikiList wikiList={dbData} size="py-2" />
    </>
  );
};
export default Wiki;
