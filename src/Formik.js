import { useFormik } from 'formik'
import React from 'react'

const FormikForm = () => {
    const formik = useFormik({
        initialValues:{
            email: "",
            password: ""

        },
        onSubmit: (values)=>{
            console.log(values)
            
        },
        validate:(values)=>{
            let error = {};
            if(!values.email)
            error.email = "Email required"
            if(!values.password)
            error.password = "Password required"
            return error; 
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Enter user Email
                    <input type="text" id="email"
                     onChange={formik.handleChange} 
                     value={formik.values.email}   />
                     <br />

                     {formik.errors.email? <div className="error">{formik.errors.email} </div>: ""}
                </label>
                <br />
                <br />
                <br />
                <label>
                    Enter user password
                    <input type="password" id="password"
                     onChange={formik.handleChange}
                      value={formik.values.password}  />
                      <br />
                      {formik.errors.password? <div className="error">{formik.errors.password}</div> : ""}
                </label>
                 <br />
                 <br /><br />
                 <input type="submit" />
            </form>
        </div>
    )
}

export default FormikForm
