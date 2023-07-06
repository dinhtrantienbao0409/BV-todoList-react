import React, { useState, useContext } from "react";

import { Input, Radio, Modal, Button, Form } from "antd";
import { useTodos } from "../App";
import { TodoContext } from "./context";

export const CreatePopup = ({ onOpen, onSave, onCancel, categoryType }) => {
  const [checkedValue, setCheckedValue] = useState(categoryType);
  console.log(
    "🚀 ~ file: createPopup.js:13 ~ CreatePopup ~ checkedValue:",
    checkedValue
  );
  const [form] = Form.useForm();

  const handleSubmit = () => {
    onSave(form.getFieldsValue());
    form.resetFields();
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={onOpen}
        onOk={handleSubmit}
        onCancel={onCancel}
      >
        <Form form={form}>
          <Form.Item name="status">
            <Radio.Group value="todo">
              <Radio value="todo">To Do</Radio>
              <Radio value="inProgress">In Progress</Radio>
              <Radio value="done">Done</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="name">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>
        </Form>
      </Modal>
    </>
  );
};
