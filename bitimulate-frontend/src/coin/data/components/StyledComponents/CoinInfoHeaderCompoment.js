import styled from 'styled-components'

export const CoinInfoContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
`
export const HiddenH3 = styled.h3`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0);
    clip-path: polygon(0, 0);
    overflow: hidden;
    text-indent: -9999px;
`
export const CoinInfoMain = styled.div`
    display: flex;
    align-items: center;
    min-width: 380px;
`

export const CoinLogo = styled.i`
    display: inline-block;
    width: 35px;
    height: 35px;
    background-image: ${({ coinSymbol }) =>
        `url(https://static.upbit.com/logos/${coinSymbol}.png)`};
    background-size: cover;
    margin-left: 5px;
`
export const CoinNameContainer = styled.div`
    padding: 0 8px 0 13px;
`
export const CoinName = styled.strong`
    font-size: 1.7rem;
    font-weight: 800;
    color: #2b2b2b;

    @media ${({ theme }) => theme.mobileS} {
        font-size: 1.5rem;
    }
`
export const CoinMarketName = styled.span`
    display: flex;
    font-size: 0.9rem;
    flex-direction: column;
    padding-left: 5px;
    margin-top: 7px;
`
export const PriceInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const Price = styled.strong`
    color: ${({ priceColor }) => priceColor};
    font-size: 2rem;
    font-weight: 800;

    @media ${({ theme }) => theme.mobileS} {
        font-size: 1.5rem;
    }
`
export const PriceUnit = styled.span`
    font-size: 0.9rem;
    font-weight: 500;
    padding-left: 5px;
`
export const ChangeContainer = styled.span`
    font-size: 0.8rem;
    margin-top: 5px;
`
export const ChangeRate = styled.strong`
    font-size: 1rem;
    color: ${({ priceColor }) => priceColor};
    margin: 0 10px 0 5px;
    font-weight: 800;
`
export const ChangePrice = styled.strong`
    font-size: 1rem;
    font-weight: 800;
    color: ${({ priceColor }) => priceColor};
`
export const TradeInfoContainer = styled.dl`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 45%;
    height: 100%;
    margin: 0 10px 0 0;

    @media ${({ theme, mobileMNone }) => (mobileMNone ? theme.mobileM : true)} {
        display: none;
    }
`
export const InfoContainer = styled.div`
    height: 100%;
    margin-left: 15px;
    @media ${({ theme, tabletNone }) => (tabletNone ? theme.tablet : true)} {
        display: none;
    }
    @media ${({ theme, mobileMNone }) => (mobileMNone ? theme.mobileM : true)} {
        display: none;
    }
`
export const TradeInfo = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50%;
    min-width: ${({ minWidth }) => minWidth || 'none'};
    border-bottom: 1px solid ${({ borderColor }) => borderColor || 'none'};
    padding: 5px 0 5px 0;
    font-size: 0.8rem;
`
export const TradeDT = styled.dt`
    display: inline-block;
    min-width: 50px;
    height: 50%;
`
export const TradeDD = styled.dd`
    margin: 0;
    display: inline-block;
    height: 50%;
    color: ${({ fontColor }) => fontColor || 'black'};
    font-weight: ${({ fontWeight }) => fontWeight || 500};
`
