import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./counter.actionType"

export const counterIncrementAction = () => {
    return {
        type: COUNTER_INCREMENT,
    }
}

export const counterDecrementAction = () => {
	return {
		type: COUNTER_DECREMENT,
	};
};