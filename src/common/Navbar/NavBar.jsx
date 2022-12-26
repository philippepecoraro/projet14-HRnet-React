import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {


    return (
        <div className='navbar'>
            <div className="navbar-title">
                <Link to={'#'} className='navbarTitle'>HRnet</Link>
            </div>
            <div className='navbarLink'>
                <Link to={'/'} className='navbarText1'>Home</Link>
                <Link to={'employeeList'} className='navbarText2'>View Current Employee</Link>
            </div>
        </div>

    )
}

export default NavBar