import "./App.css";
import InputSection from "./components/InputSection";
import ShowTransactions from "./components/ShowTranscations";
import Tittle from "./components/Title";

function App() {
  return (
    <>
      <div className="name">
        <Tittle />
      </div>
      <div className="mainContainer">
        <header>
          <InputSection />
        </header>
        <main>
          <ShowTransactions />
          <ShowTransactions />
          <ShowTransactions />
        </main>
      </div>
    </>
  );
}

export default App;
