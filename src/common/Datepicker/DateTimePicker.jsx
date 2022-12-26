import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"



const DateTimePicker = ({ name, value, onChange }) => {

    return (
        <DatePicker
            onChange={onChange}
            selected={(value && new Date(value)) || null}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText="Click to select a date"
            todayButton="Today"
            id={name}
        />
    )
}

export default DateTimePicker