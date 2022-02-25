import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAddAction } from "../redux/todoRedux/todo.action";
import { v4 as uuid } from "uuid";
export const TodoInput = () => {
	const [todoValue, setTodoValue] = useState("");
	const dispatch = useDispatch();
	return (
		<div>
			<input
				type="text"
				placeholder="enter data"
				value={todoValue}
				onChange={(e) => {
					setTodoValue(e.currentTarget.value);
				}}
			/>
			<button
				onClick={() => {
					if (todoValue !== "") {
						dispatch(todoAddAction({ id: uuid(), title: todoValue }));
						setTodoValue("");
					}
				}
				}
			>
				ADD
			</button>
		</div>
	);
};
