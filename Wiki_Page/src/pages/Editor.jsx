import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (content, delta, source, editor) => {
    setContent(content);
  };

  const handleSave = () => {
    const data = { title, content };
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

    console.log("Title:", title);
    console.log("Content:", content);
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
        className="mb-12 overflow-y-auto"
        value={content}
        onChange={handleContentChange}
        style={{ background: "white", height: "400px" }}
      />
      <Button word="입력" handler={handleSave} />
    </section>
  );
};

export default Editor;
