import logo from "./logo.svg";
import "./App.css";
import { Col, Row, Card, Space, Button, message } from "antd";
import { useState, useContext, useEffect } from "react";
import { CreatePopup } from "./components/createPopup";
import { TaskList } from "./components/taskList";
import { Task } from "./components/task";
import { mockData } from "./mockData";
import { v4 } from "uuid";

function App() {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  console.log("🚀 ~ file: App.js:13 ~ App ~ tasks:", tasks);

  const handleOpenPopup = () => {
    setVisible(true);
  };
  const handleSave = (data) => {
    Object.assign(data, { id: v4() });
    setTasks([...tasks, data]);
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const handleDeleteTask = (id) => {
    let deletedList = [...tasks];
    const result = deletedList.filter((task) => task.id !== id);
    setTasks(result);
  };

  // const handleChangeStatus = (id, status) => {
  // console.log("🚀 ~ file: App.js:34 ~ handleChangeStatus ~ status:", status);
  // console.log("🚀 ~ file: App.js:34 ~ handleChangeStatus ~ id:", id);
  // let updatedList = [...tasks];
  // updatedList = tasks.map((item) => {
  //   if (item.id === id && item.status === "todo") {
  //     return { ...item, status: "inprogress" };
  //   } else if (item.id === id && item.status === "inprogress") {
  //     return { ...item, status: "done" };
  //   }
  // });
  // setTasks(updatedList);
  // };

  // const handleConfirmDelete = (e, id) => {
  //   console.log(e);
  //   message.success("Click on Yes");
  //   let deletedList = [...tasks];
  //   const result = deletedList.filter((task) => task.id !== id);
  //   setTasks(result);
  // };
  // const handleCancelDelete = (e) => {
  //   console.log(e);
  //   message.error("Click on No");
  // };

  useEffect(() => {}, []);

  return (
    <>
      {/* <Row>
        {mockData &&
          mockData.map((item) =>
            item.type === "to do" ? (
              <Col span={8} key={item.id}>
                <TaskList
                  title={item.type}
                  type={item.type}
                  onClick={handleOpenPopup}
                >
                  {tasks &&
                    tasks.map((task) =>
                      task.status === "todo" ? (
                        <Task
                          key={task.id}
                          task={task.name}
                          onDelete={() => handleDeleteTask(task.id)}
                          // onChangeStatus={() =>
                          //   handleChangeStatus(task.id, task.status)
                          // }
                          // onConfirm={() => handleConfirmDelete(task.id)}
                        />
                      ) : null
                    )}
                </TaskList>
              </Col>
            ) : item.type === "in progress" ? (
              <Col span={8} key={item.id}>
                <TaskList title={item.type} onClick={() => handleOpenPopup()}>
                  {tasks &&
                    tasks.map((task, id) =>
                      task.status === "inprogress" ? (
                        <Task
                          key={task.name}
                          task={task.name}
                          onDelete={() =>
                            handleDeleteTask(task.id, task.status)
                          }
                          // onChangeStatus={() =>
                          //   handleChangeStatus(task.id, task.status)
                          // }
                          // onConfirm={() => handleConfirmDelete()}
                        />
                      ) : null
                    )}
                </TaskList>
              </Col>
            ) : (
              <Col span={8} key={item.id}>
                <TaskList title={item.type} onClick={() => handleOpenPopup()}>
                  {tasks &&
                    tasks.map((task, id) =>
                      task.status === "done" ? (
                        <Task
                          key={task.name}
                          task={task.name}
                          onDelete={() =>
                            handleDeleteTask(task.id, task.status)
                          }
                          // onChangeStatus={() =>
                          //   handleChangeStatus(task.id, task.status)
                          // }
                          // onConfirm={() => handleConfirmDelete()}
                        />
                      ) : null
                    )}
                </TaskList>
              </Col>
            )
          )}
      </Row> */}
      <Row>
        {mockData &&
          mockData.map((item) => (
            <TaskList
              category={item}
              taskData={tasks}
              onOpen={handleOpenPopup}
              onDelete={handleDeleteTask}
            >
              {/* {tasks && tasks.map((item) => <Task data={item}></Task>)} */}
            </TaskList>
          ))}
      </Row>
      <CreatePopup
        open={visible}
        onOpen={visible}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </>
  );
}

export default App;
