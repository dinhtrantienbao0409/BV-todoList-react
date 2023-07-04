import React from "react";
import { Form, Input, Radio, Modal } from "antd";

export const CreatePopup = ({ onOpen, onSave, onCancel }) => {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={onOpen}
        onOk={onSave}
        onCancel={onCancel}
      >
        <Form>
          <Form.Item>
            <Radio.Group>
              <Radio value="todo"> To Do </Radio>
              <Radio value="inprogress"> In Progress </Radio>
              <Radio value="done"> Done </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
