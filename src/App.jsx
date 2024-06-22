import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
//
function App() {
  const route = useRoutes(routes);
  return (
    <>
      <Navbar />
      {route}
      <Footer/>
    </>
  );
}

export default App;
