import "./App.css";
import ThemeProvider from "./context/ThemeContext";
import Button from "./components/Button";

function App() {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
}

export default App;
