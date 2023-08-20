import './App.css'
import { AppRoutes } from './routes'
import { AuthProvider } from "./context/Auth";
import { TopThingsProvider } from './context/TopThingsContext/index'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TopThingsProvider>
          <AppRoutes />
        </TopThingsProvider>
      </AuthProvider>
    </div>
  )
}
export default App
