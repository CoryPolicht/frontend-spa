
import { Routes, Route } from "react-router-dom";
import Layout from ".";
import Dashboard from "../pages/adminDashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="dashboard" element={<Dashboard/>}/> 
            </Route>
        </Routes>
    );
};

export default AppRoutes;