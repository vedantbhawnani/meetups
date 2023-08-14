import { Route, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";
// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

// import classes from "./components/layout/MainNavigation.module.css";

function App() {
  return (
    <Layout>
      {/* <MainNavigation /> */}
      <Routes>
        <Route exact path="/" element={<AllMeetups />} />
        <Route path="/new-meetups" element={<NewMeetups />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
