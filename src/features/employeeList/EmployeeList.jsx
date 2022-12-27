import './EmployeeList.css'
import { useSelector } from 'react-redux'


const EmployeeList = () => {

    const employeesList = useSelector(state => state.employeesList.employees)
    console.log('employeesList:', employeesList)

    return (
        <div className="employeeList">
            <div className="container">
                <div className="title">
                    <h1>Current Employees</h1>
                </div>
                {employeesList.length > 0 &&
                    <div>

                        <div>
                            {employeesList[0].firstName}
                        </div>

                        <div>
                            {employeesList[0].lastName}
                        </div>
                        <div>
                            {employeesList[0].dateOfBirthString}
                        </div>
                        <div>
                            {employeesList[0].startDateWorkString}
                        </div>
                        <div>
                            {employeesList[0].americaState.value}
                        </div>
                        <div>
                            {employeesList[0].americaState.label}
                        </div>
                        <div>
                            {employeesList[0].department.value}
                        </div>
                        <div>
                            {employeesList[0].department.label}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default EmployeeList