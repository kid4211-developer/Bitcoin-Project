import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { changeTimeTypeAndData } from '../action/CoinDataAction'
import withSelectedOption from './withContainer/withSelectedOption'
import withThemeData from './withContainer/withThemeData'
import * as DataConsole from '../components/StyledComponents/CoinDataConsoleCompoment'

// Chart에 표시할 Candle Time Type 선택
const ChartDataConsole = ({ theme, selectedTimeCount, selectedTimeType }) => {
    const dispatch = useDispatch()

    const changeChartTime = useCallback(
        (timeCount, timeType) => () => {
            dispatch(changeTimeTypeAndData({ timeCount, timeType }))
        },
        [dispatch]
    )

    return (
        <DataConsole.Container theme={theme}>
            <DataConsole.HiddenH3>차트에 표시할 캔들의 시간 선택</DataConsole.HiddenH3>
            <DataConsole.TimeBtnContainer>
                <DataConsole.TimeBtn
                    onClick={changeChartTime(1, 'minutes')}
                    isSelected={selectedTimeCount === 1 && selectedTimeType === 'minutes'}
                >
                    1m
                </DataConsole.TimeBtn>
                <DataConsole.TimeBtn
                    onClick={changeChartTime(3, 'minutes')}
                    isSelected={selectedTimeCount === 3 && selectedTimeType === 'minutes'}
                >
                    3m
                </DataConsole.TimeBtn>
                <DataConsole.TimeBtn
                    onClick={changeChartTime(5, 'minutes')}
                    isSelected={selectedTimeCount === 5 && selectedTimeType === 'minutes'}
                >
                    5m
                </DataConsole.TimeBtn>
                <DataConsole.TimeBtn
                    onClick={changeChartTime(10, 'minutes')}
                    isSelected={selectedTimeCount === 10 && selectedTimeType === 'minutes'}
                >
                    10m
                </DataConsole.TimeBtn>
                <DataConsole.TimeBtn
                    onClick={changeChartTime(15, 'minutes')}
                    isSelected={selectedTimeCount === 15 && selectedTimeType === 'minutes'}
                >
                    15m
                </DataConsole.TimeBtn>
                <DataConsole.TimeBtn
                    onClick={changeChartTime(60, 'minutes')}
                    isSelected={selectedTimeCount === 60 && selectedTimeType === 'minutes'}
                >
                    1h
                </DataConsole.TimeBtn>
                <DataConsole.TimeBtn
                    onClick={changeChartTime(240, 'minutes')}
                    isSelected={selectedTimeCount === 240 && selectedTimeType === 'minutes'}
                >
                    4h
                </DataConsole.TimeBtn>
                <DataConsole.TimeBtn
                    onClick={changeChartTime(1, 'days')}
                    isSelected={selectedTimeCount === 1 && selectedTimeType === 'days'}
                >
                    1d
                </DataConsole.TimeBtn>
            </DataConsole.TimeBtnContainer>
        </DataConsole.Container>
    )
}

export default withSelectedOption()(withThemeData()(ChartDataConsole))
