import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import todoListState from "../../atoms/todoListState";
import { Todo } from "../../types";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
      ...oldTodoList,
    ]);
    setInputValue("");
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
