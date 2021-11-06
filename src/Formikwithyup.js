import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup';

const FormikFormwithyup = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""

        },
        onSubmit: (values) => {
            console.log(values)

        },
        validationSchema: yup.object({
            email: yup.string().email().required('This field is required.'),
            password: yup.string()
                .min(6, 'Password is too short.')
                .max(20, 'Password is too long.')
                .required('This field is required.')

        })

    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Enter user Email
                    <input type="text" id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                    <br />

                    {formik.errors.email ? <div className="error">{formik.errors.email} </div> : ""}
                </label>
                <br />
                <br />
                <br />
                <label>
                    Enter user password
                    <input type="password" id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} />
                    <br />
                    {formik.errors.password ? <div className="error">{formik.errors.password}</div> : ""}
                </label>
                <br />
                <br /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormikFormwithyup
