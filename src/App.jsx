import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout"
import Home from "./pages/Home";
import Viaggi from "./pages/Viaggi";
import Dettagli from "./pages/Dettagli";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/viaggi" element={<Viaggi />} />
            <Route path="/viaggi/:id" element={<Dettagli />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
