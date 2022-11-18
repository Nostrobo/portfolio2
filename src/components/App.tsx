import AppContainer from './AppContainer'
import { AppProvider } from '../AppContext'

function App() {
    return (
        <>
            <AppProvider>
                <AppContainer />
            </AppProvider>
        </>
    )
}

export default App
