import logo from "./logo.svg";
import "./App.css";
import { Col, Row, Card, Space, Button } from "antd";
import { useState, createContext, useContext } from "react";
import { CreatePopup } from "./components/createPopup";
import { v4 } from "uuid";
import { TaskList } from "./components/taskList";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

function App() {
  const [visible, setVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleOpenPopup = () => {
    setVisible(true);
  };
  const handleSave = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: v4(),
        todo,
        status: false,
      },
    ]);
  };

  const setStatus = (id, status) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status: status } : todo))
    );
  };
  return (
    <>
      <TodoContext.Provider value={{ todos, addTodo, setStatus }}>
        <Row>
          <Col span={8}>
            <Card
              title="Default size card"
              extra={
                <Button type="primary" onClick={() => handleOpenPopup()}>
                  Add
                </Button>
              }
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Default size card"
              extra={
                <Button type="primary" onClick={() => handleOpenPopup()}>
                  Add
                </Button>
              }
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Default size card"
              extra={
                <Button type="primary" onClick={() => handleOpenPopup()}>
                  Add
                </Button>
              }
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
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
      </TodoContext.Provider>
    </>
  );
}

export default App;
