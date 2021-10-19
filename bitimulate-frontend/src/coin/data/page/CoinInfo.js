import React from 'react'
import CoinDataConsole from '../container/CoinDataConsole'
import CoinInfoHeader from '../container/CoinInfoHeader'
import CoinMainChart from '../container/CoinMainChart'
import CoinMainContainer from '../container/CoinMainContainer'

function CoinInfo() {
    return (
        <>
            <CoinMainContainer />
            <CoinInfoHeader />
            <CoinDataConsole />
            <CoinMainChart />
        </>
    )
}

export default CoinInfo
