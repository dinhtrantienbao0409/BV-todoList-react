import logo from "./logo.svg";
import "./App.css";
import { Col, Row, Card, Space, Button, message } from "antd";
import { useState, useContext, useEffect } from "react";
import { TaskList } from "./components/taskList";
import { Task } from "./components/task";
import { mockData } from "./mockData";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log("🚀 ~ file: App.js:11 ~ App ~ tasks:", tasks);

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
