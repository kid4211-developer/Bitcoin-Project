export const changeOptionActions = (type, key) => {
    const SUCCESS = `${type}_SUCCESS`
    return (state, action) => {
        switch (action.type) {
            case SUCCESS:
                return {
                    ...state,
                    [key]: action.payload,
                }
            default:
                return state
        }
    }
}
