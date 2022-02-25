import React from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export const Todo = () => {
  return (
      <div>
          <h1>TODO APPLICATION</h1>
          <TodoInput />
          <TodoList />
    </div>
  )
}
