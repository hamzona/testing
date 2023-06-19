import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/get").then((res) => {
      setItems(res.data[0].niz);
    });
  }, []);

  function add() {
    axios.post("http://localhost:4000/add").then((res) => {
      setItems(res.data.niz);
    });
  }

  function del() {
    axios.delete("http://localhost:4000/delete").then((res) => {
      setItems(res.data.niz);
    });
  }
  return (
    <div>
      <button
        onClick={() => {
          add();
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          del();
        }}
      >
        DELETE
      </button>
      {items.map((item, index) => {
        return <div key={index}>{index}</div>;
      })}
    </div>
  );
}

export default App;
