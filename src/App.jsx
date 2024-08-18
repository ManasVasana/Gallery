import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './navbar';
import Dussehra_2023 from './pages/2023_dussera';
import Onam_2023 from './pages/2023_onam';
import Dussehra_2022 from './pages/2022_dussera';
import Onam_2022 from './pages/2022_onam';
import Sankranthi_2023 from './pages/2023_sankranthi';
import Sankranthi_2022 from './pages/2022_sankranthi';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/2023_dussera" element={<Dussehra_2023 />} />
                <Route path="/2023_onam" element={<Onam_2023 />} />
                <Route path="/2023_sankranthi" element={<Sankranthi_2023 />} />
                <Route path="/2022_dussera" element={<Dussehra_2022 />} />
                <Route path="/2022_onam" element={<Onam_2022 />} />
                <Route path="/2022_sankranthi" element={<Sankranthi_2022 />} />
            </Routes>
        </Router>
    );
}

export default App;
