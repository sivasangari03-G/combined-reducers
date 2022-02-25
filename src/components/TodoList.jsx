import React from 'react'
import { useSelector } from 'react-redux'
import { TodoSingle } from './TodoSingle';

export const TodoList = () => {
    const todo = useSelector(state => state.todo.todo)
    // console.log("todo",todo);
  return (
      <div>
          {
              todo.map((elem) => {
                  return <TodoSingle key={elem.id} elem={elem} />
              })
          }
      </div>
  )
}
