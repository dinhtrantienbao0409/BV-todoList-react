import React, { useContext } from "react";
import { Col, Row, Card, Space, Button } from "antd";
import { Task } from "./task";

export const TaskList = ({ category, onOpen, taskData }) => {
  console.log("🚀 ~ file: taskList.js:6 ~ TaskList ~ category:", category);
  return (
    <Col span={8} key={category.id}>
      <Card
        title={category.type}
        type={category.type}
        extra={
          <>
            <Button type="primary" onClick={onOpen}>
              Add
            </Button>
          </>
        }
        style={{ width: 500 }}
      >
        {taskData && taskData.map((item) => <Task taskInfo={item}> </Task>)}
      </Card>
    </Col>
  );
};
