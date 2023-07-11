import './App.css'
import { AppRoutes } from './routes'
import { AuthProvider } from "./context/Auth";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  )
}
export default App
