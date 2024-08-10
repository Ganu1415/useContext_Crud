import AddItem from "./components/AddItem";
import { CrudProvider } from "./context/CrudContext";
import ItemList from "./components/ItemList";
import "./App.css";
function App() {
  return (
    <CrudProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">CRUD App Using useContext</h1>
        <AddItem />
        <ItemList />
      </div>
    </CrudProvider>
  );
}

export default App;
