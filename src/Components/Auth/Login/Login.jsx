import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const LoginComponent = ({ saveUserData }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      const registrationData = JSON.parse(localStorage.getItem('registrationData'));

      if (
        registrationData &&
        registrationData.email === values.email &&
        registrationData.password === values.password
      ) {
        formik.resetForm();
        alert('Login successful!');
        navigate('/products');
      } else {
        // Failed login
        alert('Invalid email or password');
      }
    },
  });

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-form p-4">
        <h2 className="mb-4">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              {...formik.getFieldProps('email')}
              className={`form-control ${
                formik.touched.email && formik.errors.email ? 'is-invalid' : ''
              }`}
              name="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              {...formik.getFieldProps('password')}
              className={`form-control ${
                formik.touched.password && formik.errors.password ? 'is-invalid' : ''
              }`}
              name="password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="button d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <Link to="/register" className="text-secondary">
            New User? Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
