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

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        dyreholdId: data.dyreholdId,
        individ: data.individ,
        produksjonsplassId: data.produksjonsplassId,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <div className="formContainer">
      <h1>Ønsker du å gjøre endringer?</h1>
      <form onSubmit={(e) => submit(e)} className="form">
        <label>Dyrehold ID</label>
        <select
          onChange={(e) => handle(e)}
          id="dyreholdId"
          value={data.dyreholdId}
          type="number"
          placeholder="Dyrehold ID"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <label>Individ</label>
        <input
          onChange={(e) => handle(e)}
          id="individ"
          value={data.individ}
          type="number"
          placeholder="Individ"
        />
        <label>Produksjonsplass ID</label>
        <input
          onChange={(e) => handle(e)}
          id="produksjonsplassId"
          value={data.produksjonsplassId}
          type="text"
          placeholder="Produksjonsplass ID"
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Skjema;
