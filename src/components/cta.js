/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFormik } from 'formik';
import bgFooterSquiggle from '../assets/bg-footer-squiggle.svg';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Oops! Please add your email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Oops! That doesn’t look like an email address';
  }

  return errors;
};

const CTA = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values, onSubmitProps) => {
      alert(JSON.stringify(values, null, 2));
      onSubmitProps.resetForm();
    },
  });

  return (
    <section className="cta">
      <img
        className="bg-footer-squiggle"
        src={bgFooterSquiggle}
        alt="Background footer squiggle"
        aria-hidden="true"
      />
      <h2>Get notified when we launch</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
        className="form"
      >
        <div className="input-container">
          <input
            className={formik.errors.email ? 'input-error' : ''}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="input-error-message">{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit">Get notified</button>
      </form>
    </section>
  );
};

export default CTA;
