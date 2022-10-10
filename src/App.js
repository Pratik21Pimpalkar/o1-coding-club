import MainHomePage from "./pages/Homepage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DSA from "./pages/DSA";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      {/* <MainHomePage /> */}
        <Routes>
          <Route path="/" element={<MainHomePage />}/>
            <Route path="/dsa" element={<DSA />} />
            {/* <Route path="blogs" element={<Blogs />} />
          
            <Route path="*" element={<NoPage />} /> */}
         
        </Routes>
   </>
  );
}

export default App;
