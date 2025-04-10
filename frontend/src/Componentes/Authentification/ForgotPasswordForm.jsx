import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



const ForgotPasswordForm = ({ onSubmit, switchToLogin }) => {
    //define the validation schema using yup
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
    }); 
   
    return (
        <div className="form-box">
            <Formik 
                initialValues={{ email: ""}}
                validationSchema={validationSchema}
                onSubmit={async (values, {setSubmitting, setErrors }) => {
                    try {
                        await onSubmit(values.email);
                    } catch (error) {
                        if (error.response && error.response.data) {
                            setErrors({ email: error.response.data.message})
                        } else {
                            setErrors({ email: "An unexpected error occured"});
                        }
                    } finally{
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <h1>Forgot Password</h1>
                        <div className="input-box">
                            <Field
                                type= "email"
                                name= "email"
                                placeholder="Email"
                                required
                             />
                            <ErrorMessage name="email" component="div" className="error"/>
                        </div>
                        <div className="button-container">
                            <button type="submit" disabled={isSubmitting}>
                                Send Reset Link
                            </button>
                            <button type="button" onClick={switchToLogin} className="back-button">
                                Back
                            </button>
                        </div>
                       
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ForgotPasswordForm;