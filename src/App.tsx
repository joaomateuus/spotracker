import './App.css'
import { AppRoutes } from './routes'
import { AuthProvider } from "./context/Auth";
import { TopThingsProvider } from './context/TopThingsContext/index'

// import { Navbar } from './components/Navbar';
// import { NavbarLogged } from './components/NavbarLogged';
// import { log } from 'console';

function App() {
  // const {user, logout} = useContext(AuthContext);
  return (
    <div className="App">
      <AuthProvider>
        <TopThingsProvider>
          {/* {user ? <Navbar />: <NavbarLogged user={user} logout={logout} />} */}
          <AppRoutes />
        </TopThingsProvider>
      </AuthProvider>
    </div>
  )
}
export default App
