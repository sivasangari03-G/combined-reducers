import { useDispatch } from "react-redux";
import { todoDeleteAction } from "../redux/todoRedux/todo.action";

export const TodoSingle = ({ elem }) => {
	const dispatch = useDispatch();
	return (
		<div>
			<span>{elem.title}</span>
			<button
				onClick={() => {
					dispatch(todoDeleteAction({ id: elem.id }));
				}}
			>
				DELETE
			</button>
		</div>
	);
};
