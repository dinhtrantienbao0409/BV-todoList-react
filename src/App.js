import "./App.css";
import { Row } from "antd";
import { useState } from "react";
import { TaskList } from "./components/taskList";
import { mockData } from "./mockData";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Row>
        {mockData &&
          mockData.map((item) => (
            <TaskList
              category={item}
              handleTask={setTasks}
              taskInfo={tasks}
              key={item.id}
            />
          ))}
      </Row>
    </>
  );
}

export default App;
