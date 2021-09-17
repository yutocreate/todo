import React from "react";

const CompleteTodos = (props) => {
  const { todos, onClickDelete, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTodo</p>
      <div>
        {todos.map((todo, index) => {
          return (
            <ul key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
              <button onClick={() => onClickDelete(index)}>完了</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default CompleteTodos;
