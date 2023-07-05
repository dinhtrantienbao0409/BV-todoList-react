import React, { useState } from "react";

import { Form, Input, Radio, Modal, Button } from "antd";
import { useTodos } from "../App";

export const CreatePopup = ({ onOpen, onSave, onCancel }) => {
  const [task, setTask] = useState("");
  console.log("🚀 ~ file: createPopup.js:8 ~ CreatePopup ~ task:", task);
  const [status, setStatus] = useState("");
  console.log("🚀 ~ file: createPopup.js:10 ~ CreatePopup ~ status:", status);
  const { addTask } = useTodos();
  console.log("🚀 ~ file: createPopup.js:12 ~ CreatePopup ~ addTask:", addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task, status);
    setTask("");
    setStatus("");
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={onOpen}
        onOk={onSave}
        onCancel={onCancel}
      >
        <form onSubmit={() => handleSubmit()}>
          <Radio.Group onChange={(e) => setStatus(e.target.value)}>
            <Radio value="todo"> To Do </Radio>
            <Radio value="inprogress"> In Progress </Radio>
            <Radio value="done"> Done </Radio>
          </Radio.Group>

          <Input onChange={(e) => setTask(e.target.value)} />
          <Button>add</Button>
        </form>
      </Modal>
    </>
  );
};
