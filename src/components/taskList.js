import React from "react";
import { useTodos } from "../App";

export const TaskList = () => {
  const { tasks } = useTodos();
  console.log("🚀 ~ file: taskList.js:6 ~ TaskList ~ tasks:", tasks);
  return (
    <>
      <div>123</div>
      {/* {
        // 3
        tasks.map((task, i) => (
          <span key={i} {...task} />
        ))
      } */}
    </>
  );
};
