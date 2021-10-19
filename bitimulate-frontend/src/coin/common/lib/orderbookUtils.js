export const init = (orderbooks, _) => {
    const data = {}
    orderbooks.forEach((orderbook) => {
        data[orderbook.market] = {
            ...orderbook,
            code: orderbook.market,
        }
    })
    return data
}

export const update = (orderbook, state) => {
    const orderbookData = state.Coin.orderbook.data
    const market = orderbook.code
    return {
        ...orderbookData,
        [market]: {
            ...orderbook,
            market,
        },
    }
}
