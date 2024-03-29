import { Route, Routes } from "react-router-dom";
import Headers from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="wrapper">
      <Headers />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
