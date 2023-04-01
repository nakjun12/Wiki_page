import WikiList from "../components/WikiList";
import Button from "../components/Button";
import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();

  const [wikiList, setwikiList] = useState([]);

  useLayoutEffect(() => {
    //비동기로 처리되기때문에 큰차이 없지만 트라이해보았음
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        setwikiList(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlerNav = () => {
    navigate("/editor");
  };

  return (
    <div>
      <section>
        <div className="flex justify-end">
          <Button handler={handlerNav} />
        </div>
        <WikiList wikiList={wikiList} />
      </section>
    </div>
  );
};

export default Main;
