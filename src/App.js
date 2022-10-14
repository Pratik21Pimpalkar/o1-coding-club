import MainHomePage from "./pages/Homepage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DSA from "./pages/DSA";
import Navbar from "./components/Navbar";
import Super50 from "./pages/Super50";
function App() {
  return (
    <>
      {/* <MainHomePage /> */}
        <Routes>
          <Route path="/" element={<MainHomePage />}/>
            <Route path="/dsa" element={<DSA />} />
            <Route path="/super50" element={<Super50/>} />
            <Route path="/pythonbootcamp" element={<Super50/>} />
            {/* <Route path="*" element={<NoPage/>} />  */}
         
        </Routes>
   </>
  );
}

export default App;
