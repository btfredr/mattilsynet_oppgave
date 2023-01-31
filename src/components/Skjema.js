import React, { useState } from "react";
import axios from "axios";

const Skjema = () => {
  const url = "http://localhost:4000/registrerforflytning";
  const [data, setData] = useState({
    dyreholdId: "",
    individ: "",
    produksjonsplassId: "",
  });
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div>
      <form>
        <input
          onChange={(e) => handle(e)}
          id="dyreholdId"
          value={data.dyreholdId}
          type="text"
          placeholder="Dyrehold ID"
        />
        <input
          onChange={(e) => handle(e)}
          id="individ"
          value={data.individ}
          type="number"
          placeholder="Individ"
        />
        <input
          onChange={(e) => handle(e)}
          id="produksjonsplassId"
          value={data.produksjonsplassId}
          type="text"
          placeholder="Produksjonsplass ID"
        />
      </form>
    </div>
  );
};

export default Skjema;
