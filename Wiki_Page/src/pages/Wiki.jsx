import { useLocation, useParams } from "react-router-dom";
import WikiList from "../components/WikiList";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router";
import { useState, useEffect, useMemo } from "react";

const Wiki = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); //백업
  const [newContent, setnewContent] = useState("");
  const [wikiList, setwikiList] = useState([]);
  const [contentChecked, setcontentChecked] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (location.state) {
      setwikiList(location.state.wikiList);
      setTitle(location.state.data.title);
      setContent(location.state.data.content);
      setnewContent(location.state.data.content);
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
          setnewContent(idData[0].content);
        });
    }
  }, [location.state, id]);

  const handlerFix = () => {
    navigate("/editor", { state: { data: { title, content, id } } });
  };

  const includedTitles = useMemo(() => {
    // 포함되어있는 제목 데이터 정리
    return wikiList
      .filter((el) => content.includes(el.title))
      .sort((a, b) => b.title.length - a.title.length);
  }, [wikiList, content]);

  useEffect(() => {
    const fixResult = () => {
      //자동 링크 씌우는 함수
      const sortedTitles = includedTitles.sort(
        (a, b) => b.title.length - a.title.length
      ); //긴 것부터 정렬
      let newContent = content;

      let matchArray = []; //index 체크할 배열
      sortedTitles.forEach((titleObj) => {
        const { id, title } = titleObj;
        const regex = new RegExp(`${title}`, "g");
        let match;

        while ((match = regex.exec(newContent)) !== null) {
          //포함여부 확인
          console.log(match.index);
          let ischecked = false;
          for (let i = 0; i < matchArray.length; i += 2) {
            if (
              match.index >= matchArray[i] &&
              match.index < matchArray[i] + matchArray[i + 1] //포함된 인덱스 제외
            ) {
              ischecked = true;
              break; // 이미 링크로 변경된 부분은 건너뛰기 여기서 매치인덱스 바뀜
            }
          }
          if (ischecked) continue;

          const link = `<a href="http://localhost:3000/wiki/${id}">${title}</a>`;
          newContent =
            newContent.slice(0, match.index) +
            link +
            newContent.slice(match.index + title.length); //해당부분을 자르고 사이에 넣음

          matchArray.push(match.index); //배열에 인덱스 저장
          matchArray.push(link.length);

          for (let i = 0; i < matchArray.length; i += 2) {
            //맨 앞 단어가 늦게 체크된다면 뒤에 있는 index값 상승
            if (match.index < matchArray[i]) {
              matchArray[i] = matchArray[i] + link.length - 1;
            }
          }
        }
      });

      setnewContent(newContent); //백업
      if (includedTitles.length > 0) setcontentChecked(false);
    };
    if (includedTitles.length > 0 && contentChecked) fixResult(); // 첫렌더링 시에는 값이 없다.
  }, [includedTitles, content, contentChecked]);

  return (
    <>
      <article className="text-gray-600 body-font">
        <ButtonComponent word="수정" handler={handlerFix} />
        <div className="container px-5 mt-8  mx-auto">
          <div className="flex flex-col w-full mb-12">
            <label>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-12 bg-white text-gray-900 border-2 pb-3">
                제목 : {title}
              </h1>
            </label>
            <section className="h-36">
              <div dangerouslySetInnerHTML={{ __html: newContent }} />
            </section>
          </div>
        </div>
      </article>
      <WikiList wikiList={includedTitles} size="py-2" />
    </>
  );
};
export default Wiki;
