import Header from './Header'
import { MainContainer } from '../styles/App.style'
import { AppProvider } from '../AppContext'

function App() {
    return (
        <>
                <AppProvider>
                <MainContainer>
                    <Header />
                </MainContainer>
            </AppProvider>
        </>
    )
}

export default App
