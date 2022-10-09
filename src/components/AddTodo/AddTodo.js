import React, { useState} from "react";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "antd";
import { Button, Input } from "antd";
import s from "./AddTodo.module.css";



function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");


  function saveTodo() {
    if(value){
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }
  }
  return (
    <Row>
      <Col span={12} offset={6} className={s.addTodoForm}>
        <Input
          placeholder="Enter a task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="danger" onClick={saveTodo} className={s.btn}>
          Add
        </Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
