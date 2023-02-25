import MainHomePage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import DSA from "./pages/DSA";
import Super50 from "./pages/Super50";
import Aptitudeseries from "./pages/Aptitudeseries";
import Pythonbootcamp from "./pages/Pythonbootcamp";
import PlacePrep360 from "./pages/PlacePrep360";
import Sdebootcamp from "./pages/Sdebootcamp";
import Coresubjects from "./pages/CoreSubjects";
import Coderun from "./pages/Coderun";
import Navbar from "./components/Navbar";
import ThousandX from "./pages/ThousandX";
import PlaceKit from "./pages/PlaceKit";
import CoreSubjectsForPlacements from "./pages/CoreSubjectsForPlacements";
import ManageDashboard from "./pages/Company/ManageDashboard";
import CreateJob from "./pages/Company/CreateJob";
import CreateIntern from "./pages/Company/CreateIntern";
import JobStudent from "./pages/Jobs";
import JobBookmarks from "./pages/JobBookmarks";
import StudentRegister from "./pages/StudentRegister";
import ManageJob from "./pages/Company/ManageJob";
import ManageIntern from "./pages/Company/ManageIntern";
import SpecificWork from "./pages/SpecificWork";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/super40" element={<Super50 />} />
        <Route path="/sdebootcamp" element={<PlacePrep360 />} />

        <Route path="/csfundamentals" element={<CoreSubjectsForPlacements />} />
        <Route path="/placekit" element={<PlaceKit />} />
        <Route path="/1000x" element={<ThousandX />} />
        <Route path="/company">
          <Route path="manage" element={<ManageDashboard />} />
          <Route path="manage/jobs" element={<ManageJob />} />
          <Route path="manage/intern" element={<ManageIntern />} />
          <Route path="manage/jobs/new" element={<CreateJob />} />
          <Route path="manage/jobs/:id" element={<SpecificWork />} />
          <Route path="manage/intern/new" element={<CreateIntern />} />
          <Route path="manage/intern/:id" element={<SpecificWork />} />
        </Route>
        <Route path="/opportunities" element={<JobStudent />} />
        <Route path="/opportunities/bookmarks" element={<JobBookmarks />} />
        <Route path="/opportunities/:id/register" element={<StudentRegister />} />
        {/*     
        <Route path="/aptitudeseries" element={<Aptitudeseries />} />
        <Route path="/sdebootcamp" element={<Sdebootcamp />} />
        <Route path="/coresubjects" element={<Coresubjects />} />
        <Route path="/coderun" element={<Coderun />} /> 
        <Route path="/dsa" element={<DSA />} />
        <Route path="/pythonbootcamp" element={<Pythonbootcamp />} />*/}
        {/* <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </>
  );
}

export default App;

