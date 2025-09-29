import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";

import { Header } from "./components/header";
import { AuthProvider } from "./contexts/AuthContext";
import { LandingHome } from "./pages/LandingHome";
function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <LandingHome />
      </AuthProvider>
    </>
  );
}

export default App;
