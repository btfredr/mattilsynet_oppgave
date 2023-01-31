import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Skjema from "./components/Skjema";

function App() {
  const [plasser, setPlasser] = useState([]);

  useEffect(() => {
    const fetchPlasser = async () => {
      const url = `http://localhost:4000/produksjonsplass`;
      // henter inn produksjonsplassene fra APIet
      const result = await axios(url);

      // setter innholdet fra APIet til konstanten
      setPlasser(result.data);
    };

    // kjører funksjonen
    fetchPlasser();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Produksjonsplasser</h1>
        <div className="produksjonsplasser">
          {plasser.map((plass) => (
            <div className="produksjonsplass" key={plass.produksjonsplassid}>
              <ul>
                <li>Bruksnummer: {plass.bruksnummer}</li>
                <li>Bygningsnummer: {plass.bygningsnummer}</li>
                <li>Gårdsnummer: {plass.gaardsnummer}</li>
                <li>Produksjonsplass ID: {plass.produksjonsplassid}</li>
              </ul>
            </div>
          ))}
        </div>
        <Skjema />
      </div>
    </>
  );
}

export default App;
