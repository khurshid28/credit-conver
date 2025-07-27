import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";

import FirmsPage from "./pages/sidebar/firms";
import AdminsPage from "./pages/sidebar/admins";
import UsersPage from "./pages/sidebar/users";
import ScoringModelsPage from "./pages/sidebar/scoring-models";
import ChatPage from "./pages/chat";
import ScoringRequestsPage from "./pages/sidebar/scoring-request";
import ScoringContractsPage from "./pages/sidebar/scoring-contracts";
import CreditsPage from "./pages/sidebar/credits";
import ProductsPage from "./pages/sidebar/products";
import PathsPage from "./pages/sidebar/paths";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* People Page */}
            {/* <Route path="/teachers" element={<TeachersPage />} />
             <Route path="/groups" element={< GroupsPage />} />
             <Route path="/students" element={<StudentsPage />} /> */}

            <Route index path="/admins" element={<AdminsPage />} />
            <Route index path="/users" element={<UsersPage />} />
            <Route index path="/products" element={<ProductsPage />} />

            <Route index path="/credits" element={<CreditsPage />} />

            <Route
              index
              path="/scoring-models"
              element={<ScoringModelsPage />}
            />
            <Route
              index
              path="/scoring-requests"
              element={<ScoringRequestsPage />}
            />
            <Route
              index
              path="/scoring-contracts"
              element={<ScoringContractsPage />}
            />

            <Route index path="/paths" element={<PathsPage />} />

            <Route index path="/chat" element={<ChatPage />} />

            <Route index path="/firms-mchj" element={<FirmsPage />} />
            <Route index path="/firms-yatt" element={<FirmsPage />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

           
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
