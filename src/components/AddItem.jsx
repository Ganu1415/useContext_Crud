import React, { useContext, useState } from "react";
import { CrudContext } from "../context/CrudContext";

const AddItem = () => {
  const { addItem } = useContext(CrudContext);
  const [item, setItem] = useState({
    name: "",
    email: "",
  });
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      name: item.name,
      email: item.email,
    };
    // console.log(newData);
    addItem(newData);
    // setEmail("");
    // setName("");
    setItem({ name: "", email: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={item.name}
        name="name"
        // onChange={(e) => setName(e.target.value)}
        onChange={handleChange}
        className="border p-2 rounded mr-2"
        placeholder="Item name"
      />
      <input
        type="email"
        name="email"
        value={item.email}
        // onChange={(e) => setEmail(e.target.value)}
        onChange={(e) => handleChange(e)}
        className="border p-2 rounded mr-2 "
        placeholder="Item email"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
