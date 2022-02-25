import { TODO_ADD, TODO_DELETE } from "./todo.actionType"

export const todoAddAction = (payload) => ({
	type: TODO_ADD,
	payload,
});

export const todoDeleteAction = (payload) => ({
	type: TODO_DELETE,
	payload,
});


