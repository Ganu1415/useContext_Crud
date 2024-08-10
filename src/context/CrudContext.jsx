import { createContext, useState } from "react";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const updateItem = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  };

  return (
    <CrudContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </CrudContext.Provider>
  );
};

export { CrudContext, CrudProvider };
