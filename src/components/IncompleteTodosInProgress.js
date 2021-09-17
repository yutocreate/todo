import React from 'react'

const IncompleteTodosInProgress = (props) =>  {
  const {todos, onClickDelete, onClickComplete} = props
  return (
    <div className="incompleteinprogress-area">
    <p className="title">進行中のTodo</p>
    <div>
      {todos.map((todo, index) => {
        return (
          <ul key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickComplete(index)}>完了へ</button>
            <button onClick={() => onClickDelete(index)}>ゴミ箱へ</button>
          </ul>
        );
      })}
    </div>
  </div>
  )
}

export default IncompleteTodosInProgress
