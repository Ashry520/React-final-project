import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      age: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      age: Yup.number().required('Age is required').min(20, 'Minimum age is 20').max(80, 'Maximum age is 80'),
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required').min(10, 'Minimum 10 characters'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('registrationData', JSON.stringify(values));

      formik.resetForm();

      alert('Registration successful!');

      navigate('/');
    },
  });

  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <div className="registration-form p-4">
        <h2 className="mb-4">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First name</label>
            <input
              type="text"
              {...formik.getFieldProps('first_name')}
              className={`form-control ${
                formik.touched.first_name && formik.errors.first_name ? 'is-invalid' : ''
              }`}
              name="first_name"
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className="invalid-feedback">{formik.errors.first_name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last name</label>
            <input
              type="text"
              {...formik.getFieldProps('last_name')}
              className={`form-control ${
                formik.touched.last_name && formik.errors.last_name ? 'is-invalid' : ''
              }`}
              name="last_name"
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div className="invalid-feedback">{formik.errors.last_name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              {...formik.getFieldProps('age')}
              className={`form-control ${
                formik.touched.age && formik.errors.age ? 'is-invalid' : ''
              }`}
              name="age"
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="invalid-feedback">{formik.errors.age}</div>
            ) : null}
          </div>
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
              Register
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <Link to="/" className="text-secondary">
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
