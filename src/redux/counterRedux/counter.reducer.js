import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./counter.actionType"

const initState = {
    count : 0
}

export const counterReducer = (state = initState, { type }) => {
    switch (type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}