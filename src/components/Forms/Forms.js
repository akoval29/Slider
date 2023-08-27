import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./formStyle.scss";

export const Forms = ({ FormikHandler }) => {
  const [inputValues, setInputValues] = useState({});

  return (
    <section className="forms">
      <Formik
        // initialValues={inputValues}
        initialValues={{ inputSearch: "", inputAmount: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.inputSearch) {
            errors.inputSearch = "ENTER TEXT";
          } else if (!values.inputAmount) {
            errors.inputAmount = "AMOUNT";
          } else if (isNaN(values.inputAmount)) {
            errors.inputAmount = "ONLY DIGITS";
          } else if (
            values.inputAmount.includes(".") ||
            values.inputAmount.includes(",")
          ) {
            errors.inputAmount = "INTEGERS";
          } else if (values.inputAmount > 50) {
            errors.inputAmount = "50 MAX";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          FormikHandler(values);
          setInputValues(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="forms__row">
            <div className="forms__wrap">
              <Field
                className="forms__input"
                type="inputSearch"
                name="inputSearch"
                tabIndex={0}
                placeholder="Type something ..."
              />
            </div>

            <div className="forms__submitContainer">
              <ErrorMessage
                className="forms__error forms__error--left"
                name="inputSearch"
                component="div"
              />

              <button
                className="forms__button"
                type="submit"
                disabled={isSubmitting}
                tabIndex={0}
              >
                search
              </button>

              <ErrorMessage
                className="forms__error forms__error--right"
                name="inputAmount"
                component="div"
              />
            </div>

            <div className="forms__wrap">
              <Field
                className="forms__input"
                type="inputAmount"
                name="inputAmount"
                placeholder="How many photos ?"
                tabIndex={0}
              />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
