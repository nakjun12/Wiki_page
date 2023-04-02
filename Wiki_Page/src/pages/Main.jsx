import WikiList from "../components/WikiList";
import ButtonComponent from "../components/ButtonComponent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();

  const [wikiList, setwikiList] = useState([]);

  useEffect(() => {
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
        <div className="flex justify-end mb-2">
          <ButtonComponent handler={handlerNav} />
        </div>
        <WikiList wikiList={wikiList} />
      </section>
    </div>
  );
};

export default Main;
