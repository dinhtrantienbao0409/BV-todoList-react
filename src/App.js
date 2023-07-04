import logo from "./logo.svg";
import "./App.css";
import { Col, Row, Card, Space, Button } from "antd";
import { useState } from "react";
import { CreatePopup } from "./components/createPopup";

function App() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [todoName, setTodoName] = useState("");

  const handleOpenPopup = () => {
    setVisible(true);
  };
  const handleSave = () => {
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
      {/* {visible === true && ( */}
      <CreatePopup
        open={visible}
        onOpen={visible}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      {/* )} */}
    </>
  );
}

export default App;
