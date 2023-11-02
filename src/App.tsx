import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles";
import Footer from "./components/Footer";
import Rotas from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
