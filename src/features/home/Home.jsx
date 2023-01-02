import './Home.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addEmployee } from './homeSlice'
import { Modal } from 'phpecoraro-npm-modal'
import { useState, Suspense } from 'react';
import { lazy } from 'react'


const DateTimePicker = lazy(() => import('../../common/Datepicker/DateTimePicker'))
const FormSelect = lazy(() => import('../../common/Select/FormSelect'))


const Home = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const initialvalues = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDateWork: "",
        street: "",
        city: "",
        americaState: { value: "AL", label: "Alabama" },
        zipCode: "",
        department: { value: "Sales", label: "Sales" }
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("This field is required")
            .min(2, "Too Short")
            .max(20, "Too Long"),
        lastName: Yup.string()
            .required("This field is required")
            .min(2, "Too Short")
            .max(20, "Too Long"),
        dateOfBirth: Yup.string()
            .required("This field is required"),
        startDateWork: Yup.string()
            .required("This field is required"),
        street: Yup.string()
            .required("This field is required")
            .max(20, "Too Long"),
        city: Yup.string()
            .required("This field is required")
            .max(20, "Too Long"),
        zipCode: Yup.string()
            .required("This field is required")
            .min(5, "Too Short")
            .max(5, "Too Long"),
    })

    const handleSubmit = (formValue) => {
        const { firstName, lastName, dateOfBirth, startDateWork,
            street, city, americaState, zipCode, department } = formValue;
        const dateOfBirthString = new Date(dateOfBirth).toLocaleDateString('en-US')
        const startDateWorkString = new Date(startDateWork).toLocaleDateString('en-US')
        dispatch(addEmployee({
            firstName, lastName, dateOfBirthString, startDateWorkString,
            street, city, americaState, zipCode, department
        }))
    }

    return (
        <div className="home">
            <div className="container">
                <div className="title">
                    <h1>HRnet</h1>
                </div>
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={initialvalues}
                    validationSchema={validationSchema}
                >
                    {({ values, setFieldValue, dirty, isValid }) => (
                        <Form>
                            <div className="subTitle">
                                <h2>Create Employee</h2>
                            </div>
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
                                <Suspense fallback={<div>Chargement ...</div>}>
                                    <DateTimePicker
                                        name="dateOfBirth"
                                        value={values.dateOfBirth}
                                        onChange={date => setFieldValue('dateOfBirth', date)}
                                    />
                                </Suspense>
                                <ErrorMessage
                                    name="dateOfBirth"
                                    component="div"
                                    className="error-text" />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="startDateWork">Start Date</label>
                                <Suspense fallback={<div>Chargement ...</div>}>
                                    <DateTimePicker
                                        name="startDateWork"
                                        value={values.startDateWork}
                                        onChange={date => setFieldValue('startDateWork', date)}
                                    />
                                </Suspense>
                                <ErrorMessage
                                    name="startDateWork"
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
                                    <label htmlFor="americaState">State</label>
                                    <Suspense fallback={<div>Chargement ...</div>}>
                                        <FormSelect
                                            name="americaState"
                                            value={values.state}
                                            onChange={americaState => setFieldValue("americaState", americaState)}
                                            defaultValue={{ value: "AL", label: "Alabama" }}
                                        />
                                    </Suspense>
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
                                <Suspense fallback={<div>Chargement ...</div>}>
                                    <FormSelect
                                        name="department"
                                        value={values.state}
                                        onChange={department => setFieldValue("department", department)}
                                        defaultValue={{ value: "Sales", label: "Sales" }}
                                    />
                                </Suspense>
                            </div>
                            {(dirty && isValid) ?
                                <div>
                                    <button type="submit" className="formButton" onClick={() =>
                                        setShow(true)}
                                    >Save</button>
                                    <Modal title="Create Employee"
                                        onClose={() => setShow(false)} show={show}>
                                        <p>Employee Created</p>
                                    </Modal>
                                </div>
                                :
                                <button type="submit" className="formButton">Save</button>
                            }
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Home