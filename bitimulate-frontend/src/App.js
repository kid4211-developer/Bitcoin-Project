import './App.css'
import { Switch, Route } from 'react-router-dom'
import CoinInfo from './coin/data/page/CoinInfo'
import LandingPage from './LandingPage'

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/trade" component={CoinInfo} />
            </Switch>
        </>
    )
}

export default App
