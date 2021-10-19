import axios from 'axios'

export const getMarketCodes = () => axios.get('https://api.upbit.com/v1/market/all?isDetails=false')

export const getInitCanldes = (coins) => axios.get(`https://api.upbit.com/v1/ticker?markets=${coins}`)

export const getInitOrderbooks = (coins) => axios.get(`https://api.upbit.com/v1/orderbook?markets=${coins}`)

export const getOneCoinTradeLists = (coin) => axios.get(`https://api.upbit.com/v1/trades/ticks?market=${coin}&count=50`)

export const getOneCoinCandles = ({ coin, timeType, timeCount }) => {
    if (timeType === 'minutes') {
        return axios.get(`https://api.upbit.com/v1/candles/${timeType}/${timeCount}?market=${coin}&count=200`).then((res) => {
            return {
                ...res,
                data: res.data.sort((a, b) => a.timestamp - b.timestamp),
            }
        })
    } else {
        return axios.get(`https://api.upbit.com/v1/candles/${timeType}?market=${coin}&count=200`).then((res) => {
            return {
                ...res,
                data: res.data.sort((a, b) => a.timestamp - b.timestamp),
            }
        })
    }
}

// sort 함수 : array.sort((a, b) => a - b) array를 작은순서 대로 순차 배열
export const getAdditionalCoinCandles = ({ coin, timeType, timeCount, datetime }) => {
    if (timeType === 'minutes')
        return axios
            .get(`https://api.upbit.com/v1/candles/${timeType}/${timeCount}?market=${coin}&to=${datetime}&count=200`)
            .then((res) => {
                return {
                    ...res,
                    data: res.data.sort((a, b) => a.timestamp - b.timestamp),
                }
            })
    else
        return axios.get(`https://api.upbit.com/v1/candles/${timeType}?market=${coin}&to=${datetime}&count=200`).then((res) => {
            return {
                ...res,
                data: res.data.sort((a, b) => a.timestamp - b.timestamp),
            }
        })
}
