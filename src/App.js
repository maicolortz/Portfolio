import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portafolio from "./Portafolio";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Portafolio/>} />
    </Routes>
    </BrowserRouter>
  )
    
}
