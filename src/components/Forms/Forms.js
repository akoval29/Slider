import { Formik, Form, Field, ErrorMessage } from "formik";

import "./formStyle.scss";

export const Forms = ({ FormikHandler }) => {
  return (
    <section className="formGroup">
      <Formik
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
        onSubmit={(values, { setSubmitting }) => {
          FormikHandler(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="formGroup__row">
            <Field
              className="formGroup__input"
              type="inputSearch"
              name="inputSearch"
              tabIndex={0}
              placeholder="Type something ..."
            />

            <ErrorMessage
              className="formGroup__error formGroup__error--left"
              name="inputSearch"
              component="div"
            />

            <button
              className="formGroup__button"
              type="submit"
              disabled={isSubmitting}
              tabIndex={0}
            >
              search
            </button>

            <Field
              className="formGroup__input"
              type="inputAmount"
              name="inputAmount"
              placeholder="How many photos ?"
              tabIndex={0}
            />

            <ErrorMessage
              className="formGroup__error formGroup__error--right"
              name="inputAmount"
              component="div"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};
