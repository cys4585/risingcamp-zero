import { Reset } from "styled-reset";
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home";
import RoomPage from "./pages/Room";

/**
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/room", element: <RoomPage /> },
]);
*/

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/room" element={<RoomPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <>
      <Reset />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
