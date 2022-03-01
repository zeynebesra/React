import { useState } from "react";

function App() {
  //state tanımı
  const [name, setName] = useState("Zeyneb");
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(["Ayşe", "Zeyneb"]);

  console.log(age, name);

  return (
    <div className="App">
      <h1> Merhaba {name} </h1>
      <h2> Yaş: {age} </h2>

      <button onClick={() => setName("Esra")}>Change Name</button>
      <button onClick={() => setAge(26)}>Change Age</button>
    </div>
  );
}

export default App;
