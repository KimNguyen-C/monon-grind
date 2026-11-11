import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Menu from "./components/Menu";
import OrderSummary from "./components/OrderSummary";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Header />

      <main>
        <Menu />
        <OrderSummary />
      </main>
    </div>
  );
}

export default App;