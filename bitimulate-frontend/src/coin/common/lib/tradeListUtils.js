export const init = (tradeLists, state) => {
    const tradeListData = state.Coin.tradeList.data
    const market = tradeLists[0].merket
    return {
        ...tradeListData,
        [market]: tradeLists,
    }
}

export const update = (tradeList, state) => {
    const tradeListData = state.Coin.tradeList.data
    const market = tradeList.code
    if (
        tradeListData[market] &&
        tradeListData[market].find((data) => data.sequential_id === tradeList.sequential_id)
    ) {
        return tradeListData
    }
    // 데이터가 200개까지만 유지되게 만듦
    tradeListData[market] && tradeListData[market].length > 200 && tradeListData[market].pop()

    return tradeListData[market]
        ? {
              ...tradeListData,
              [market]: [tradeList, ...tradeListData[market]],
          }
        : {
              ...tradeListData,
              [market]: [tradeList],
          }
}
