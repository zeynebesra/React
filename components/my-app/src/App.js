import "./App.css";
//import Header from "./components/Header";
import User from "./components/User";

const friends = [
  { id: 1, name: "Ayşe" },
  { id: 2, name: "Ela" },
  { id: 3, name: "Rumeysa" },
];
function App() {
  return (
    <>
      <User
        name="Zeyneb"
        surname="Öztürk"
        isLoggedIn={true}
        age={25}
        friends={friends}
        address={{
          title: "Kadıköy",
          zip: 34755,
        }}
      />
    </>
  );
}

export default App;

// `
