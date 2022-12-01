import MainHomePage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import DSA from "./pages/DSA";
import Super50 from "./pages/Super50";
import Aptitudeseries from "./pages/Aptitudeseries";
import Pythonbootcamp from "./pages/Pythonbootcamp";
import Sdebootcamp from "./pages/Sdebootcamp";
import Coresubjects from "./pages/CoreSubjects";
import Coderun from "./pages/Coderun";
import Navbar from "./components/Navbar";
import ThousandX from "./pages/ThousandX";
function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/super40" element={<Super50 />} />
    {/*     <Route path="/pythonbootcamp" element={<Pythonbootcamp />} />
        <Route path="/aptitudeseries" element={<Aptitudeseries />} />
        <Route path="/sdebootcamp" element={<Sdebootcamp />} />
        <Route path="/coresubjects" element={<Coresubjects />} />
        <Route path="/coderun" element={<Coderun />} /> */}
        <Route path="/1000x" element={<ThousandX />} />
        {/* <Route path="*" element={<NoPage/>} />  */}

      </Routes>
    </>
  );
}

export default App;

