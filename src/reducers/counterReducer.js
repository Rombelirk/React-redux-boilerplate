const initialState = {
    number: 0
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, number: state.number + 1};
            break;

        case "DECREMENT":
            return {...state, number: state.number - 1};
            break;

        default:
            return state;
    }
}