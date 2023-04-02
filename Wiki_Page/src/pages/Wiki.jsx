import { useLocation, useParams } from "react-router-dom";
import WikiList from "../components/WikiList";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router";
import { useState, useEffect, useCallback, useRef } from "react";

//위키 필터 돌려서 dbdata처럼 돌리자
const Wiki = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [wikiList, setwikiList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

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
        });
    }
  }, [location.state, id]);

  const handlerFix = () => {
    navigate("/editor", { state: { data: { title, content, id } } });
  };

  const includedTitles = wikiList
    .filter((el) => content.includes(el.title))
    .sort((a, b) => b.title.length - a.title.length);
  console.log(includedTitles, content);
  const fixResult = () => {
    const sortedTitles = includedTitles.sort(
      (a, b) => b.title.length - a.title.length
    );
    let newContent = content;
    let lastIndex = 0;

    sortedTitles.forEach((titleObj) => {
      const { id, title } = titleObj;
      const regex = new RegExp(`${title}`, "g");
      let match;

      while ((match = regex.exec(newContent)) !== null) {
        if (match.index < lastIndex) {
          continue; // 이미 링크로 변경된 부분은 건너뛰기
        }

        const link = `<a href="http://localhost:3000/wiki/${id}">${title}</a>`;
        newContent =
          newContent.slice(0, match.index) +
          link +
          newContent.slice(match.index + title.length);
        console.log(newContent);
        lastIndex = match.index + link.length;
      }
    });
    console.log(newContent);
    setContent(newContent);
  };

  useEffect(() => {
    if (includedTitles.length > 0) fixResult(); // 첫렌더링 시에는 값이 없다.
  }, [includedTitles.length]);

  // "<a href=\"http://localhost:3000/wiki/3\">키아</a>"

  // const result = '<a href="http://localhost:3000/wiki/3">키아</a>';
  // const newComent = (
  //   <p>
  //     감자 싫어요 <Link to=" / ">Home</Link>김치최고
  //   </p>
  // );

  //플랜 1
  // 검증뒤에 성공하면
  // 타이틀과 뉴 코멘트 백업
  // 기존 코멘트로 검증한다.

  //1번 예시 이세돌은 멋있따.

  // 전체 검증하는 법
  // 만약에 검증되면 replace해줌
  //같은 것을 만나면 링크로 바꿔주고
  return (
    <>
      <section className="text-gray-600 body-font">
        <ButtonComponent word="수정" handler={handlerFix} />
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 bg-white text-gray-900 border-2 pb-3">
              {title}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              // 위험하지 않은 콘텐츠가 제공되면서도 마크업을 동적으로 생성하기 위한 방법입니다.
              // 하지만 위험한 콘텐츠는 삽입하지 않도록 주의해야 합니다.
            />
            {content}
          </div>
        </div>
      </section>
      <WikiList wikiList={includedTitles} size="py-2" />
    </>
  );
};
export default Wiki;
