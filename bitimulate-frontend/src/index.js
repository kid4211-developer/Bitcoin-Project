import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from '../src/coin/common/style/GlobalStyle'
import theme from '../src/coin/common/style/theme'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import RootReducer from './coin/common/root/RootReducer'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import RootSaga from './coin/common/root/RootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware)))

sagaMiddleware.run(RootSaga)

ReactDOM.render(
    /* ThemeProvider : 작동 방식은 ContextAPI를 기반으로 이루어져 있다
     * 즉, ThemeProvider로 감싸진 하위 Component들은 ThemeProvider로 전달받은 theme를 props로 전달받아서 사용이 가능함
     * index.js에서 <ThemeProvider theme={theme}> 식으로 전달된 theme값은 @media ${({ theme }) => theme.tablet}와 같은 방법으로
     * 언제든지 theme값에 접근 할 수 있다. (ContextAPI 방식) */
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <React.Fragment>
                <BrowserRouter>
                    <GlobalStyle />
                    <App />
                </BrowserRouter>
            </React.Fragment>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
