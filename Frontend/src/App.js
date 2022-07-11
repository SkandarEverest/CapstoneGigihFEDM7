import NavigationBar from "./components/NavigationBar";
import Artikel from "./components/Artikel";
import Informasi from "./components/Informasi";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container-all">
      <div>
        <NavigationBar id="beranda" />
      </div>
      <div>
        <Artikel id="dataInformasi" />
      </div>
      <div>
        <Informasi id="informasi" />
      </div>
      <div>
        <Footer id="footer" />
      </div>
    </div>
  );
}

export default App;
