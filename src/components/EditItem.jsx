import React, { useContext, useState } from "react";
import { CrudContext } from "../context/CrudContext";

const EditItem = ({ item, setEditing }) => {
  const { updateItem } = useContext(CrudContext);
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);
  console.log(item);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(item.id, { ...item, name, email });
    setEditing(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center "
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1 rounded mr-2"
        placeholder="Item name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-1 rounded mr-2 "
        placeholder="Item email"
      />
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Update
        </button>
        <button
          onClick={() => setEditing(false)}
          className="bg-gray-500 text-white px-4 py-1 rounded ml-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditItem;
