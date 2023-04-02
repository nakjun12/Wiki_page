import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setTitle(location.state.data.title);
      setContent(location.state.data.content);
      setChecked(true);
    }
  }, [location.state]); // location.state가 변경될 때마다 useEffect가 실행됩니다.

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  const handleSave = () => {
    const trimmedText = content.replace(/^<p>|<\/p>$/g, "");
    const data = { title, content: trimmedText };

    if (checked) {
      const id = location.state.data.id;
      fetch(`http://localhost:3001/posts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate(`/wiki/${id}`);
          console.log(data);
        });
    } else {
      fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate("/");
          console.log(data);
        });
    }
  };

  return (
    <section>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={handleTitleChange}
        className="w-full border py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <ReactQuill
        className="mb-12"
        value={content}
        onChange={handleContentChange}
        style={{ background: "white", height: "400px" }}
      />
      <ButtonComponent word="입력" handler={handleSave} />
    </section>
  );
};

export default Editor;
