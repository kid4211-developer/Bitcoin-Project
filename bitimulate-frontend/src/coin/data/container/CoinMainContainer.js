import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    connectCandleSocket,
    connectTradeListSocket,
    connetOrderbookSocket,
    startInit,
} from '../action/CoinDataAction'
import * as candleDataUtils from '../../common/lib/candleDataUtils'
import * as Main from '../components/StyledComponents/CoinMainCompoment'
import { viewSize } from '../../common/style/theme'
import withSize from './withContainer/withSize'

function CoinMainContainer({ match, widthSize, heightSize }) {
    const dispatch = useDispatch()
    console.log('폭사이즈 : ', widthSize)
    useEffect(() => {
        dispatch(startInit())
        axios.get('https://api.upbit.com/v1/market/all?isDetails=false').then((response) => {
            const marketNames = Object.keys(candleDataUtils.marketNames(response.data))
            /* WebSocket Connect init */
            dispatch(connectCandleSocket(marketNames))
            dispatch(connetOrderbookSocket(marketNames))
            dispatch(connectTradeListSocket(marketNames))
        })
    }, [dispatch])

    return (
        <>
            <Main.MainContentContainer>
                {widthSize > viewSize.tablet && (
                    <Main.ChartAndTradeSection>
                        <Main.ChartH2>Chart & TradeInformation</Main.ChartH2>
                        <div>Coin Information Request Initiating</div>
                    </Main.ChartAndTradeSection>
                )}
            </Main.MainContentContainer>
        </>
    )
}

export default withSize()(React.memo(CoinMainContainer))
