const reducerUtils = {
    success: (state, payload, key) => {
        return {
            ...state,
            [key]: {
                data: payload,
                error: false,
            },
        }
    },
    error: (state, error, key) => ({
        ...state,
        [key]: {
            ...state[key],
            error: error,
        },
    }),
}

const requestActions = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
    return (state, action) => {
        switch (action.type) {
            case SUCCESS:
                return reducerUtils.success(state, action.payload, key)
            case ERROR:
                return reducerUtils.error(state, action.payload, key)
            default:
                return state
        }
    }
}

export default requestActions
