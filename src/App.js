import logo from "./logo.svg";
import "./App.css";
import { Col, Row, Card, Space, Button } from "antd";
import { useState, useContext } from "react";
import { CreatePopup } from "./components/createPopup";
import { v4 } from "uuid";
import { TaskList } from "./components/taskList";
import { TodoContext } from "./components/context";

function App() {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  console.log("🚀 ~ file: App.js:13 ~ App ~ tasks:", tasks);

  const handleOpenPopup = () => {
    setVisible(true);
  };
  const handleSave = (data) => {
    setTasks([...tasks, data]);
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Row>
        <Col span={8}>
          <Card
            title="TO DO"
            extra={
              <>
                <Button type="primary" onClick={() => handleOpenPopup()}>
                  Add
                </Button>
              </>
            }
            style={{ width: 300 }}
          >
            {tasks &&
              tasks.map((task) =>
                task.status === "todo" ? (
                  <Card key={task.name}>
                    <p>{task.name}</p>
                  </Card>
                ) : null
              )}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="IN PROGRESS"
            extra={
              <Button type="primary" onClick={() => handleOpenPopup()}>
                Add
              </Button>
            }
            style={{ width: 300 }}
          >
            {tasks &&
              tasks.map((task) =>
                task.status === "inprogress" ? (
                  <Card>
                    <p>{task.name}</p>
                  </Card>
                ) : null
              )}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="DONE"
            extra={
              <Button type="primary" onClick={() => handleOpenPopup()}>
                Add
              </Button>
            }
            style={{ width: 300 }}
          >
            {tasks &&
              tasks.map((task) =>
                task.status === "done" ? (
                  <Card>
                    <p>{task.name}</p>
                  </Card>
                ) : null
              )}
          </Card>
        </Col>
      </Row>
      <CreatePopup
        open={visible}
        onOpen={visible}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <TaskList />
    </>
  );
}

export default App;
