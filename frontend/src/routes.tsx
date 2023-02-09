import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./App";
import { TeamManagerPage } from "./pages/TeamManagerPage";
import { AppBar } from './components/AppBar'

export default function AppRouter() {
  return(
    <>
    <div className="myStyle">
    <AppBar/>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/teamConfig" element={<TeamManagerPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    </>
  );
}