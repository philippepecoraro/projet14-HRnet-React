import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import EmployeeList from './EmployeeList';


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
