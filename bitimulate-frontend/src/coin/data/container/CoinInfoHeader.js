import * as InfoHeader from '../components/StyledComponents/CoinInfoHeaderCompoment'

import React from 'react'
import withSelectedCoinName from './withContainer/withSelectedCoinName'
import withSelectedCoinPrice from './withContainer/withSelectedCoinPrice'
import withThemeData from './withContainer/withThemeData'

const CoinInfoHeader = ({
    theme,
    coinNameKor,
    coinSymbol,
    coinNameAndMarketEng,
    highestPrice24Hour,
    lowestPrice24Hour,
    changeRate24Hour,
    changePrice24Hour,
    tradePrice24Hour,
    volume24Hour,
    price,
}) => {
    const priceColor = changeRate24Hour > 0 ? theme.priceUp : theme.priceDown
    return (
        <InfoHeader.CoinInfoContainer>
            <InfoHeader.HiddenH3>코인 가격 및 기타 정보</InfoHeader.HiddenH3>
            <InfoHeader.CoinInfoMain>
                <InfoHeader.CoinLogo coinSymbol={coinSymbol} title={`${coinNameKor} 로고`} />
                <InfoHeader.CoinNameContainer>
                    <InfoHeader.CoinName>{coinNameKor}</InfoHeader.CoinName>
                    <InfoHeader.CoinMarketName>
                        {coinNameAndMarketEng}
                    </InfoHeader.CoinMarketName>
                </InfoHeader.CoinNameContainer>
                <InfoHeader.PriceInfo>
                    <InfoHeader.Price priceColor={priceColor}>
                        {price.toLocaleString()}
                        <InfoHeader.PriceUnit priceColor={priceColor}>KRW</InfoHeader.PriceUnit>
                    </InfoHeader.Price>
                    <InfoHeader.ChangeContainer>
                        전일대비
                        <InfoHeader.ChangeRate priceColor={priceColor}>
                            {changeRate24Hour}%
                        </InfoHeader.ChangeRate>
                        <InfoHeader.ChangePrice priceColor={priceColor}>
                            {changePrice24Hour.toLocaleString()}
                        </InfoHeader.ChangePrice>
                    </InfoHeader.ChangeContainer>
                </InfoHeader.PriceInfo>
            </InfoHeader.CoinInfoMain>
            <InfoHeader.TradeInfoContainer mobileMNone={true}>
                <InfoHeader.InfoContainer tabletNone={true}>
                    <InfoHeader.TradeInfo minWidth={'100px'} borderColor={theme.lightGray2}>
                        <InfoHeader.TradeDT>고가</InfoHeader.TradeDT>
                        <InfoHeader.TradeDD fontColor={theme.priceUp} fontWeight={800}>
                            {highestPrice24Hour ? highestPrice24Hour.toLocaleString() : 0}
                        </InfoHeader.TradeDD>
                    </InfoHeader.TradeInfo>
                    <InfoHeader.TradeInfo minWidth={'100px'}>
                        <InfoHeader.TradeDT borderColor={theme.lightGray2}>
                            저가
                        </InfoHeader.TradeDT>
                        <InfoHeader.TradeDD fontColor={theme.priceDown} fontWeight={800}>
                            {lowestPrice24Hour ? lowestPrice24Hour.toLocaleString() : 0}
                        </InfoHeader.TradeDD>
                    </InfoHeader.TradeInfo>
                </InfoHeader.InfoContainer>
                <InfoHeader.InfoContainer mobileMNone={true}>
                    <InfoHeader.TradeInfo minWidth={'220px'} borderColor={theme.lightGray2}>
                        <InfoHeader.TradeDT>거래량(24h)</InfoHeader.TradeDT>
                        <InfoHeader.TradeDD>{`${volume24Hour.toLocaleString()} ${coinSymbol}`}</InfoHeader.TradeDD>
                    </InfoHeader.TradeInfo>
                    <InfoHeader.TradeInfo minWidth={'220px'}>
                        <InfoHeader.TradeDT borderColor={theme.lightGray2}>
                            거래대금(24h)
                        </InfoHeader.TradeDT>
                        <InfoHeader.TradeDD>
                            {tradePrice24Hour ? tradePrice24Hour.toLocaleString() : 0} KRW
                        </InfoHeader.TradeDD>
                    </InfoHeader.TradeInfo>
                </InfoHeader.InfoContainer>
            </InfoHeader.TradeInfoContainer>
        </InfoHeader.CoinInfoContainer>
    )
}

export default withSelectedCoinName()(
    withSelectedCoinPrice()(withThemeData()(React.memo(CoinInfoHeader)))
)
