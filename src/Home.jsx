import './Home.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const Home = () => {

    const initialvalues = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        zipCode: "",
        department: ""
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("This field is required")
            .min(3, "Too Short")
            .max(50, "Too Long"),
        lastName: Yup.string()
            .required("This field is required")
            .min(3, "Too Short")
            .max(50, "Too Long"),
    })

    const handleSubmit = (formValue) => {
        console.log('click')
        console.log('formValue:', formValue)
        const { firstName, lastName } = formValue;
        console.log('lastName:', lastName)
        console.log('firstName:', firstName)
    }

    return (
        <div className="home">
            <div className="container">
                <div className="title">
                    <h1>HRnet</h1>
                </div>
                <h2>Create Employee</h2>
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={initialvalues}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <div className="input-wrapper">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" id="firstName" />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="error-text" />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" id="lastName" />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="error-text" />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <Field name="dateOfBirth" id="dateOfBirth" type="text" />
                            <ErrorMessage
                                name="dateOfBirth"
                                component="div"
                                className="error-text" />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="startDate">Start Date</label>
                            <Field name="startDate" id="startDate" type="text" />
                            <ErrorMessage
                                name="startDate"
                                component="div"
                                className="error-text" />
                        </div>

                        <fieldset className="address">
                            <legend>Address</legend>
                            <div className="input-wrapper">
                                <label htmlFor="street">Street</label>
                                <Field name="street" id="street" type="text" />
                                <ErrorMessage
                                    name="street"
                                    component="div"
                                    className="error-text" />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="city">City</label>
                                <Field name="city" id="city" type="text" />
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="error-text" />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="state">State</label>
                                <Field as="select" name="state" id="state"></Field>
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="zipCode">Zip Code</label>
                                <Field name="zipCode" id="zipCode" type="number" />
                                <ErrorMessage
                                    name="zipCode"
                                    component="div"
                                    className="error-text" />
                            </div>
                        </fieldset>

                        <div className="input-wrapper">
                            <label htmlFor="department">Department</label>
                            <Field as="select" name="department" id="department">
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </Field>
                        </div>
                        <button type="submit" className="formButton">Save</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Home