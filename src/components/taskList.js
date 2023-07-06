import React, { useState, useEffect, useCallback } from "react";
import { Col, Row, Card, Space, Button } from "antd";
import { v4 } from "uuid";
import { CreatePopup } from "./createPopup";

import { Task } from "./task";

// Type

export const TaskList = ({ category }) => {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  console.log("🚀 ~ file: taskList.js:13 ~ TaskList ~ tasks:", tasks);
  const [taskItemList, setTaskItemList] = useState([]);
  console.log(
    "🚀 ~ file: taskList.js:14 ~ TaskList ~ taskItemList:",
    taskItemList
  );

  const handleSave = (data) => {
    Object.assign(data, { id: v4() });
    setTasks([...tasks, data]);
    setVisible(false);
  };

  const handleOpenPopup = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (tasks instanceof Array) {
      const taskItemData = tasks.filter(
        (item) => item.status === category.type
      );

      setTaskItemList(taskItemData);
    }
  }, [tasks]);

  const handleDeleteTask = (taskId) => {
    console.log(
      "🚀 ~ file: taskList.js:12 ~ handleDeleteTask ~ taskId:",
      taskId
    );
    const result = tasks.filter((task) => task.id !== taskId);
    setTasks(result);
  };

  return (
    <Col span={8} key={category.id}>
      <Card
        title={category.name}
        type={category.type}
        extra={
          <>
            <Button type="primary" onClick={handleOpenPopup}>
              Add
            </Button>
          </>
        }
        style={{ width: 300 }}
      >
        {taskItemList &&
          taskItemList.map((item) => (
            <Task taskInfo={item} onDelete={handleDeleteTask}>
              {" "}
            </Task>
          ))}
      </Card>
      <CreatePopup
        open={visible}
        onOpen={visible}
        categoryType={category.type}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </Col>
  );
};
