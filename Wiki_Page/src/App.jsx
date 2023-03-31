import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wiki from "./pages/Wiki";
import Main from "./pages/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/Wiki/:id",
    element: <Wiki />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
