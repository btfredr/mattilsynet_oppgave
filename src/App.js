import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [plasser, setPlasser] = useState([]);

  useEffect(() => {
    const fetchPlasser = async () => {
      const url = `http://localhost:5000/produksjonsplass`;
      // henter inn produksjonsplassene fra APIet
      const result = await axios(url);

      // setter innholdet fra APIet til konstanten
      setPlasser(result.data);
      console.log(result.data);
    };

    // kjører funksjonen
    fetchPlasser();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Mattilsynet oppgave</h1>

        <div className="produksjonsplasser">
          {plasser.map((plass) => (
            <div className="produksjonsplass" key={plass.produksjonsplassid}>
              <p>{plass.kommunenummer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
