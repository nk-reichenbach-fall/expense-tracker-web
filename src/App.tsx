import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateTracker from "./pages/CreateTracker";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/create-tracker",
      element: <CreateTracker />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
