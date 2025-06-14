import NotFound from "pages/NotFound";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Root from "./pages/root";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Settings from "pages/settings/Settings";
import Logout from "pages/logout/Logout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="logout" element={<Logout />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
