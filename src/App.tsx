import "./App.css";
import { TopMenu } from "./components/TopMenu/TopMenu";
import { Homepage } from "./components/Homepage/Homepage";

function App() {
  const items = ["umów wizyte", "o nas", "oferta", "kontakt"];

  return (
    <>
      <TopMenu items={items} />
      <Homepage title={"Zadbaj z nami o swój samochód"} />
    </>
  );
}

export default App;
