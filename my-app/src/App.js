import "./App.css";
//import Header from "./components/Header";
import User from "./components/User";

function App() {
  return (
    <>
      <User
        name="Zey"
        surname="Öztürk"
        isLoggedIn={false}
        friends={["Zeyneb", "Ayşe", "Rumeysa", "Ela"]}
      />
    </>
  );
}

export default App;

// `
