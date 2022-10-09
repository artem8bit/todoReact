import React, { useEffect, useState } from "react";
import {
  EditTwoTone,
  getTwoToneColor,
  setTwoToneColor,
  DeleteTwoTone,
  CloseSquareTwoTone,
  CheckSquareTwoTone,
} from "@ant-design/icons";
import { Button, Radio } from "antd";
import s from "./TodoList.module.css";
import { Col, Row } from "antd";



function ToDoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState(todo);

  useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  function todoFilter(status) {
    if (status === "all") {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.status === status);
      setFiltered(newTodo);
    }
  }
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div>
      <Row>
        <Col span={24} className={s.filter}>
          <Radio.Group className={s.btns}>
            <Radio.Button
              
              value="large"
              onClick={() => todoFilter("all")}
            >
              All
            </Radio.Button>
            <Radio.Button value="default" onClick={() => todoFilter(true)}>
              Open
            </Radio.Button>
            <Radio.Button value="small" onClick={() => todoFilter(false)}>
              Close
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      {filtered.map((item) => (
        <div key={item.id} className={s.listItems}>
          {edit == item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div className={!item.status ? s.close : ""}>{item.title}</div>
          )}

          {edit == item.id ? (
            <div>
              <Button
                type="danger"
                onClick={() => saveTodo(item.id)}
                className={s.btn}
              >
                Save
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)} className={s.btn}>
                <DeleteTwoTone style={{ fontSize: "20px" }} />
              </Button>
              <Button
                onClick={() => editTodo(item.id, item.title)}
                className={s.btn}
              >
                <EditTwoTone style={{ fontSize: "20px" }} />
              </Button>
              <Button onClick={() => statusTodo(item.id)} className={s.btn}>
                {item.status ? (
                  <CloseSquareTwoTone style={{ fontSize: "20px" }} />
                ) : (
                  <CheckSquareTwoTone style={{ fontSize: "20px" }} />
                )}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
