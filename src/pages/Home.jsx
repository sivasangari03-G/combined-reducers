import React from 'react'
import { Counter } from "../components/Counter";
import { Todo } from "../components/Todo";

export const Home = () => {
  return (
      <div>
          <h1>home page</h1>
			<Counter />
			<Todo />
		</div>
  );
}
