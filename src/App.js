import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import General from "./pages/General/General";
import Entertainment from "./pages/Entertainment/Entertainment";
import Business from "./pages/Business/Business";
import Health from "./pages/Health/Health";
import Science from "./pages/Science/Science";
import Sports from "./pages/Sports/Sports";
import Technology from "./pages/Technology/Technology";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<General />} />
        <Route path="entertaiment" element={<Entertainment />} />
        <Route path="business" element={<Business />} />
        <Route path="health" element={<Health />} />
        <Route path="science" element={<Science />} />
        <Route path="sports" element={<Sports />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
