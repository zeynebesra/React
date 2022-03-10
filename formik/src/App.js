import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./App.css";

function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "Zeyneb",
      lastName: "Öztürk",
      email: "zey@gmail.com",
      gender: "female",
      hobies: [],
      country: "Türkiye",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name : </label>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name : </label>
        <input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email : </label>
        <input name="email" value={values.email} onChange={handleChange} />
        <br />
        <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />

        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        <br />
        <br />

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
          />
          Photography
        </div>

        <br />
        <br />

        <select name="country" value={values.country} onChange={handleChange}>
          <option value="turkey">Türkiye</option>
          <option value="england">İngiltere</option>
          <option value="usa">USA</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default App;
