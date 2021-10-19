const coinDataInitialState = {
    selectedMarket: 'KRW-BTC',
    selectedTimeType: 'minutes',
    selectedTimeCount: 5,
    selectedAskBidOrder: 'bid',
    orderPrice: 0,
    orderAmount: 0,
    orderTotalPrice: 0,
    searchCoin: '',
    marketNames: {
        error: false,
        data: {
            'KRW-BTC': '비트코인',
        },
    },
    candle: {
        error: false,
        data: {
            'KRW-BTC': {
                candles: [
                    // { date: new Date(), open: 1, close: 1, high: 1, low: 1, volume: 1 },
                ],
                tradePrice24Hour: 0,
                volume24Hour: 0,
                changeRate24Hour: 0,
            },
        },
    },
    orderbook: {
        error: false,
        data: {
            'KRW-BTC': {
                total_bid_size: 0,
                total_ask_size: 0,
                orderbook_units: [],
            },
        },
    },
    tradeList: {
        error: false,
        data: {},
    },
}

export default coinDataInitialState
