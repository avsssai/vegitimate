import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './styles/theme'
import Navbar from './components/Navbar'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar />
            </div>
        </ThemeProvider>
    )
}

export default App
