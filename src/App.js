import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import IncompleteTodos from "./components/IncompleteTodos";
import CompleteTodos from "./components/CompleteTodos";
import IncompleteTodosInProgress from "./components/IncompleteTodosInProgress";
// import IncompleteTodosEdit from "./components/IncompleteTodosEdit";

function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [incompleteTodosInProgress, setIncompleteTodosInProgress] = useState(
    []
  );
  // const [isEditing, setIsEditing] = useState(false);
  const [completeTodos, setCompleteTodos] = useState([]);

  ///////////////////////////////////////////////////////////////////
  const onChangeTodoText = (e) => {
    //打ち込んだテキストの取得
    setTodoText(e.target.value);
  };

  const onClickAdd = (e) => {
    //追加ボタン
    e.preventDefault();

    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  /////////////////////////////////////////////////////////////////////
  function inCompleteTodosButton(index) {
    //未着手の要素を移動させる
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const inCompleteOnClickDelete = (index) => {
    //未着手の要素を移動させるための関数
    inCompleteTodosButton(index);
  };

  const onClickProgress = (index) => {
    //未着手の進行中ボタン
    inCompleteTodosButton(index);
    const newProgressTodos = [
      ...incompleteTodosInProgress,
      incompleteTodos[index],
    ];
    setIncompleteTodosInProgress(newProgressTodos);
  };

  const onClickEdit = (todoText) => {
    //未着手の編集ボタン
    // setIsEditing(true);
  };

  /////////////////////////////////////////////////////////////////////
  const progressOnClickDelete = (index) => {
    //進行中のゴミ箱ボタン
    const newTodos = [...incompleteTodosInProgress];
    newTodos.splice(index, 1);
    setIncompleteTodosInProgress(newTodos);
  };
  function progressTodosButton(index) {
    //進行中の要素を消すボタンonClickAdd
    const newTodos = [...incompleteTodosInProgress];
    newTodos.splice(index, 1);
    setIncompleteTodosInProgress(newTodos);
  }

  const onClickComplete = (index) => {
    //進行中の完了ボタン
    progressTodosButton(index);
    const newCompleteTodos = [
      ...completeTodos,
      incompleteTodosInProgress[index],
    ];
    setCompleteTodos(newCompleteTodos);
  };

  /////////////////////////////////////////////////////////////////////
  const onClickReturn = (index) => {
    //完了の戻るボタン
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);

    const newInCompleteTodos = [
      ...incompleteTodosInProgress,
      completeTodos[index],
    ];
    setIncompleteTodosInProgress(newInCompleteTodos);
  };
  function completeTodosButton(index) {
    //完了の完了ボタン
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  }

  /////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <h3>todoリスト</h3>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickDelete={inCompleteOnClickDelete}
        onClickProgress={onClickProgress}
        onClickEdit={onClickEdit}
      />
      <IncompleteTodosInProgress
        todos={incompleteTodosInProgress}
        onClickDelete={progressOnClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickDelete={completeTodosButton}
        onClickReturn={onClickReturn}
      />
    </div>
  );
}

export default App;
