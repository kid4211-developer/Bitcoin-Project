import styled from 'styled-components'

export const MainContentContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 50px;
    width: 100%;
    height: 100%;

    @media ${({ theme }) => theme.tablet} {
        margin-top: 0;
        margin-bottom: 0;
    }
`

export const ChartAndTradeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 950px;
`

export const ChartH2 = styled.h2`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0);
    clip-path: polygon(0, 0);
    overflow: hidden;
    text-indent: -9999px;
`
