import React, { useContext, useState } from "react";
import { CrudContext } from "../context/CrudContext";

const AddItem = () => {
  const { addItem } = useContext(CrudContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      name,
      email,
    };
    // console.log(newData);
    addItem(newData);
    setEmail("");
    setName("");
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="Item name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
