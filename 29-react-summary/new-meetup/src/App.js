import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigtion from "./components/layout/MainNavigation";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
