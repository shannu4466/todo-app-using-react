import Header from "./components/Header";
import Task from "./components/Tasks";

function App() {
  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks/>
    </>
  );
}

export default App;
