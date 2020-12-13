import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import Home from './components/Home/Home'
import theme from './styles/theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Home />
            </div>
        </ThemeProvider>
    )
}

export default App
