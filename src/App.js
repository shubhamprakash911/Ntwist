import "./App.css";
import FirstImg from "./components/FirstImg";
import Footer from "./components/Footer";
import Mid from "./components/Mid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstImg />
      <Mid />
      <Footer />
    </div>
  );
}

export default App;
