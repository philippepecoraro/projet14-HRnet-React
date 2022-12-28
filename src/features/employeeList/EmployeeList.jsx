import './EmployeeList.css'
import { useSelector } from 'react-redux'
import Table from '../../common/Table/Table'


const EmployeeList = () => {

    return (
        <div className="employeeList">
            <div className="container">
                <div className="currentEmployeeTitle">
                    <h1>Current Employees</h1>
                </div>
                <Table />
            </div>
        </div>
    )
}

export default EmployeeList