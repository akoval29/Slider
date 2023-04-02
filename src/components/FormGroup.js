import { Formik, Form, Field, ErrorMessage } from "formik";

const FormGroup = ({ FormikHandler }) => {
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
          } else if (!/\d+/.test(values.inputAmount)) {
            errors.inputAmount = "ONLY DIGITS";
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
              className="input"
              type="inputSearch"
              name="inputSearch"
              tabIndex={0}
              placeholder="Type something ..."
            />

            <ErrorMessage
              name="inputSearch"
              component="div"
              className="formGroup__row__error formGroup__row__error--left"
            />

            <button
              type="submit"
              className="formGroup__row__button"
              disabled={isSubmitting}
              tabIndex={0}
            >
              search
            </button>

            <Field
              type="inputAmount"
              name="inputAmount"
              placeholder="How many photos ?"
              className="input"
              tabIndex={0}
            />

            <ErrorMessage
              name="inputAmount"
              component="div"
              className="formGroup__row__error formGroup__row__error--right"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormGroup;
