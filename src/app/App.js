import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../features/home/Home';
import NavBar from '../common/Navbar/NavBar';
import EmployeeList from '../features/employeeList/EmployeeList';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/employeeList' element={<EmployeeList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
