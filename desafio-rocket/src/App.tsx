import { Header } from "./components/Header/Header";
import { AddTask } from "./components/AddTask/AddTask";
import "./global.css";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  return (
    <>
      <Header />
      <AddTask />
      <Tasks />
    </>
  );
}

export default App;
