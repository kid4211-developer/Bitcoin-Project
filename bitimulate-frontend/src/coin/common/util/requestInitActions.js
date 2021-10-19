const requestInitActions = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
    return (state, action) => {
        switch (action.type) {
            case SUCCESS:
                return {
                    ...state,
                    candleDay: {
                        data: action.payload,
                        error: false,
                    },
                    [key]: {
                        data: action.payload,
                        error: false,
                    },
                }
            case ERROR:
                return {
                    ...state,
                    candleDay: {
                        ...state.candleDay,
                        error: action.payload,
                    },
                    [key]: {
                        ...state[key],
                        error: action.payload,
                    },
                }
            default:
                return state
        }
    }
}

export default requestInitActions
