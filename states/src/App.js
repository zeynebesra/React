import { useState } from "react";

function App() {
  //state tanımı
  const [name, setName] = useState("Zeyneb");
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(["Ayşe", "Zeyneb"]); // array state
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34567 }); //object state

  console.log(age, name);

  return (
    <div className="App">
      <h1> Merhaba {name} </h1>
      <h2> Yaş: {age} </h2>

      <button onClick={() => setName("Esra")}>Change Name</button>
      <button onClick={() => setAge(26)}>Change Age</button>

      <hr />
      <br></br>
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />

      <button onClick={() => setFriends([...friends, "Büşra", "Elif"])}>
        add new friends
      </button>

      <hr />
      <br></br>
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress({ ...address, title: "Ankara" })}>
        change address
      </button>
    </div>
  );
}

export default App;
