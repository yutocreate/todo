import React from 'react'

const IncompleteTodos = (props) => {
  const {todos, onClickDelete, onClickProgress, onClickEdit} = props
  return (
    <div className="incomplete-area">
    <p className="title">未着手のTodo</p>
    <div>
      {todos.map((todo, index) => {
        return (
          <ul key={index} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickProgress(index)}>進行中へ</button>
            <button onClick={() => onClickDelete(index)}>ゴミ箱へ</button>
            <button onClick={onClickEdit}>編集</button>
          </ul>
        );
      })}
    </div>
  </div>
  )
}

export default IncompleteTodos