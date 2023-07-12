import React, { useState, useContext } from "react";

import { Input, Radio, Modal, Button, Form } from "antd";
import { TODO, INPROGRESS, DONE } from "../constants/index";

export const CreatePopup = ({ onOpen, onSave, onCancel, categoryType }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    onSave(form.getFieldsValue());
    form.resetFields();
  };
  return (
    <>
      <Modal
        title="Create new task"
        open={onOpen}
        onOk={handleSubmit}
        onCancel={onCancel}
      >
        <Form form={form}>
          <Form.Item name="status">
            <Radio.Group>
              <Radio value={TODO}>To Do</Radio>
              <Radio value={INPROGRESS}>In Progress</Radio>
              <Radio value={DONE}>Done</Radio>
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
