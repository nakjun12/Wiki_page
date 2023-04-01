import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wiki from "./pages/Wiki";
import Main from "./pages/Main";
import Editor from "./pages/Editor";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <>
        <h1>404 Not Found</h1>
      </>
    ),
    children: [
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
