import { useEffect, useState } from "react";
const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  //değerler tanımı
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  //ınput değer girme
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //butona basıldığında
  const onSubmit = (e) => {
    e.preventDefault();
    //form dolmadan submit yapılmıyor.
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact({ ...contacts, form });

    //console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          value={form.fullname}
          placeholder="Full name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          value={form.phone_number}
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
