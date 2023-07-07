import React, { useState, useEffect, useCallback } from "react";
import { Col, Row, Card, Space, Button } from "antd";
import { v4 } from "uuid";
import { CreatePopup } from "./createPopup";

import { Task } from "./task";
import { TODO, INPROGRESS, DONE } from "../constants/index";

// Type

export const TaskList = ({ category, handleTask, taskInfo }) => {
  const [visible, setVisible] = useState(false);
  const [taskItemList, setTaskItemList] = useState([]);

  const handleOpenPopup = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSave = (data) => {
    Object.assign(data, { id: v4() });
    handleTask([...taskInfo, data]);
    setVisible(false);
  };

  const handleDeleteTask = (taskId) => {
    const result = taskInfo.filter((task) => task.id !== taskId);
    handleTask(result);
  };

  const handleUpdateStatus = (id) => {
    const tasks = [...taskInfo];
    const taskIndex = tasks.findIndex((task) => task.id == id);

    if (taskIndex > -1) {
      if (tasks[taskIndex].status === TODO) {
        tasks[taskIndex].status = INPROGRESS;
      } else if (tasks[taskIndex].status === INPROGRESS) {
        tasks[taskIndex].status = DONE;
      }
      handleTask(tasks);
    }

    //     return { ...item, status: INPROGRESS };
    // const updatedTaskList = taskInfo.map((item) => {
    //   if (item.id === id && item.status === TODO) {
    //     return { ...item, status: INPROGRESS };
    //   } else if (item.id === id && item.status === INPROGRESS) {
    //     return { ...item, status: DONE };
    //   }
    // });
    // handleTask(updatedTaskList);
  };

  const handleUpdateName = (taskId, updatedName) => {
    const updatedTaskName = taskInfo.map((item) => {
      if (taskId === item.id) return { ...item, name: updatedName };
    });
    handleTask(updatedTaskName);
  };

  useEffect(() => {
    if (taskInfo instanceof Array) {
      const taskItemData = taskInfo.filter(
        (item) => item.status === category.type
      );

      setTaskItemList(taskItemData);
    }
  }, [taskInfo]);

  return (
    <Col span={8} key={category.id}>
      <Card
        title={category.name}
        type={category.type}
        extra={
          <>
            <Button type="primary" shape="circle" disabled>
              {taskItemList.length}
            </Button>
            <Button type="primary" onClick={handleOpenPopup}>
              Add
            </Button>
          </>
        }
        style={{ width: "100%" }}
      >
        {taskItemList &&
          taskItemList.map((item) => (
            <Task
              key={item.id}
              taskInfo={item}
              onDelete={handleDeleteTask}
              onUpdateStatus={handleUpdateStatus}
              onUpdateName={handleUpdateName}
              handleName={setTaskItemList}
            />
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
