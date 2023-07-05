import React from "react";
import { useTodos } from "../App";

export const Task = ({ task }) => {
  return (
    <>
      <span>{task}</span>
    </>
  );
};
