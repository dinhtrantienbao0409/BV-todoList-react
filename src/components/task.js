import React from "react";
import { useTodos } from "../App";
import { DeleteFilled, RightOutlined } from "@ant-design/icons";
import { Card, Button, Typography, Popconfirm, message } from "antd";

const { Title } = Typography;

export const Task = ({ taskInfo, onDelete }) => {
  // console.log("🚀 ~ file: task.js:9 ~ Task ~ taskInfo:", taskInfo);
  return (
    <>
      <Card key={taskInfo.id}>
        <Title level={4}>{taskInfo.name}</Title>

        {/* <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={onConfirm}
          onCancel={onCancel}
          okText="Yes"
          cancelText="No"
        > */}
        <Button
          type="primary"
          danger
          shape="circle"
          icon={<DeleteFilled />}
          onClick={() => onDelete(taskInfo.id)}
        />
        {/* </Popconfirm> */}
        {/* <Button
          type="primary"
          shape="circle"
          icon={<RightOutlined />}
          onClick={onChangeStatus}
        /> */}
      </Card>
    </>
  );
};
