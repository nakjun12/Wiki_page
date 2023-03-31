import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wiki from "./pages/Wiki";
import Main from "./pages/Main";
import Editor from "./pages/Editor";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/Wiki/:id",
    element: <Wiki />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
