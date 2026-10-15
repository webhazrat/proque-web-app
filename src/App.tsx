import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Tasks } from "./pages/tasks";
import { Collections } from "./pages/collections";
import { Collection } from "./pages/collection";
import Login from "./pages/login";
import { AppLayout } from "./layouts/app-layout";
import { Task } from "./pages/task";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collection/:id" element={<Collection />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
