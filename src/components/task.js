import React, { useState } from "react";
import { useTodos } from "../App";
import {
  DeleteFilled,
  RightOutlined,
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Card, Button, Typography, Popconfirm, message, Input } from "antd";

export const Task = ({
  taskInfo,
  onDelete,
  onCancel,
  onUpdateStatus,
  onUpdateName,
  handleName,
}) => {
  const [inputState, setInputState] = useState(false);
  const [updatedName, setUpdateName] = useState("");

  return (
    <>
      <Card key={taskInfo.id}>
        {inputState === false ? (
          <>
            <p>{taskInfo.name}</p>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => onDelete(taskInfo.id)}
              onCancel={onCancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteFilled />}
              />
            </Popconfirm>
            {(taskInfo.status && taskInfo.status === "todo") ||
            taskInfo.status === "inProgress" ? (
              <Button
                type="primary"
                shape="circle"
                icon={<RightOutlined />}
                onClick={() => onUpdateStatus(taskInfo.id, taskInfo.status)}
              />
            ) : null}
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => {
                setInputState(true);
              }}
              style={{ backgroundColor: "green" }}
            />
          </>
        ) : (
          <>
            <Input
              defaultValue={taskInfo.name}
              style={{ margin: "10px 0 10px 0" }}
              onChange={(e) => setUpdateName(e.target.value)}
            />
            <Button
              type="primary"
              shape="circle"
              danger
              icon={<CloseOutlined />}
              onClick={() => setInputState(false)}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<CheckOutlined />}
              onClick={() => {
                onUpdateName(taskInfo.id, updatedName);
                setInputState(false);
              }}
              style={{ backgroundColor: "green" }}
            />
          </>
        )}
        {/* <>
          
        </>
        {inputState === true ? (
          
        ) : (
          
        )} */}
      </Card>
    </>
  );
};
