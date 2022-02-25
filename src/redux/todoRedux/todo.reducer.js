import { TODO_ADD, TODO_DELETE } from "./todo.actionType";

const initState = {
	todo: [],
};

export const todoReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case TODO_ADD: {
			return {
				...state,
				todo: [...state.todo, payload],
			};
		}
        case TODO_DELETE: {
            // console.log("payload", payload);
            return {
				...state,
				todo: state.todo.filter((elem) => elem.id !== payload.id),
			};
		}
		default:
			return state;
	}
};
