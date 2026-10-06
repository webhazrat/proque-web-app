import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Tasks } from "./pages/tasks";
import { Collections } from "./pages/collections";
import { Collection } from "./pages/collection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collection/:id" element={<Collection />} />
    </Routes>
  );
}

export default App;
