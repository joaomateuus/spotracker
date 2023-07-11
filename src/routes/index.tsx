import { Route, Routes } from "react-router-dom"
// import { Login } from "../pages/Login"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"

export const AppRoutes: React.FC = () => {
    return(
        <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}