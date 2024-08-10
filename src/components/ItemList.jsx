import React, { useContext, useState } from "react";
import { CrudContext } from "../context/CrudContext";
import EditItem from "./EditItem";
const ItemList = () => {
  const { items, deleteItem } = useContext(CrudContext);
  const [editing, setEditing] = useState(null);

  return (
    <div className="p-4">
      {items.map((item) => (
        <div key={item.id} className="p-2 bg-gray-100 mb-2">
          {editing === item.id ? (
            <EditItem item={item} setEditing={setEditing} />
          ) : (
            <div className="flex justify-between items-center">
              <span>{item.name}</span>
              <span>{item.email}</span>
              <div>
                <button
                  onClick={() => setEditing(item.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
