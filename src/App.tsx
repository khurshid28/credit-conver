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
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import RatePage from "./pages/Rate/rate";
import TeachersPage from "./pages/People/Teachers";
import StudentsPage from "./pages/People/Students";
import GroupsPage from "./pages/People/Groups";
import SubjectsPage from "./pages/Test/Subjects";
import BooksPage from "./pages/Test/Books";
import SectionsPage from "./pages/Test/Sections";
import ResultsPage from "./pages/Test/Results";
import TestsPage from "./pages/Test/Tests";
import PathsPage from "./pages/sidebar/paths";
import FirmsPage from "./pages/sidebar/firms";
import AdminsPage from "./pages/sidebar/admins";
import UsersPage from "./pages/sidebar/users";
import ScoringModelsPage from "./pages/sidebar/models";
import ChatPage from "./pages/chat";

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
           <Route index path="/scoring-models" element={<ScoringModelsPage />} />
            <Route index path="/admins" element={<AdminsPage />} />
            <Route index path="/users" element={<UsersPage />} />


             <Route index path="/chat" element={<ChatPage />} />

            {/* People Page */}
            {/* <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/sections" element={<SectionsPage />} />
            <Route path="/tests" element={<TestsPage />} />

            <Route path="/results" element={<ResultsPage />} /> */}

            {/* <Route index path="/rate" element={<RatePage />} /> */}

            {/* <Route index path="/paths" element={<PathsPage />} /> */}
            <Route index path="/firms-mchj" element={<FirmsPage />} />
            <Route index path="/firms-yatt" element={<FirmsPage />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            {/* <Route path="/form-elements" element={<FormElements />} /> */}

            {/* Tables */}
            {/* <Route path="/basic-tables" element={<BasicTables />} /> */}

            {/* Ui Elements */}
            {/* <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} /> */}
            {/* <Route path="/videos" element={<Videos />} /> */}

            {/* Charts */}
            {/* <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} /> */}
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
