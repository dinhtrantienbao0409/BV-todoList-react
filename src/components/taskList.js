import React, { useContext } from "react";
import { mockData } from "../mockData";
import { Col, Row, Card, Space, Button } from "antd";

export const TaskList = () => {
  mockData.map((item) => {
    console.log(">>>>>>>", item.type);
    switch (item.type) {
      case "to do":
        return (
          <Card
            title="TO DO"
            extra={
              <>
                <Button type="primary">Add</Button>
              </>
            }
            style={{ width: 300 }}
          >
            {item.name}
          </Card>
        );
      case "in progress":
        return (
          <Card
            title="IN PROGRESS"
            extra={
              <>
                <Button type="primary">Add</Button>
              </>
            }
            style={{ width: 300 }}
          >
            {item.name}
          </Card>
        );
      case "done":
        return (
          <Card
            title="DONE"
            extra={
              <>
                <Button type="primary">Add</Button>
              </>
            }
            style={{ width: 300 }}
          >
            {item.name}
          </Card>
        );
      default:
        break;
    }
  });
};
