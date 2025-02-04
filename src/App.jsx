import { useEffect, useState } from "react";
import "./App.css";
import InputSection from "./components/InputSection";
import ShowTransactions from "./components/ShowTranscations";
import Tittle from "./components/Title";

function App() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((transactions) => {
      setTransactions(transactions);
    });
  }, []);

  async function getTransactions() {
    const url = import.meta.env.VITE_APP_URL + "/transactions";
    const response = await fetch(url);
    return await response.json();
  }

  const addNewTransation = (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_APP_URL + "/transaction";
    const price = name.split(" ")[0];
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.substring(price.length + 1),
        description,
        dateTime,
        price,
      }),
    })
      .then((response) => response.text())
      .then((text) => {
        console.log("Raw response:", text);
        setDateTime("");
        setDescription("");
        setName("");
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  return (
    <>
      <div className="name">
        <Tittle />
      </div>
      <div className="mainContainer">
        <header>
          <InputSection
            name={name}
            setName={setName}
            description={description}
            setDateTime={setDateTime}
            setDescription={setDescription}
            addNewTransation={addNewTransation}
          />
        </header>
        <main>
          {transactions.length > 0 ? (
            <div>
              {transactions.map((transaction) => (
                <ShowTransactions
                  key={Math.random(10 * 5)}
                  transaction={transaction}
                />
              ))}
            </div>
          ) : (
            <p>No Transactions yet</p>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
