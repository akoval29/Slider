import { Formik, Form, Field, ErrorMessage } from "formik";

const Controls = ({ result, handleChange, search, perPage }) => {
  return (
    <section className="controls">
      <Formik
        initialValues={{ inputSearch: "", inputAmount: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.inputSearch) {
            errors.inputSearch = "<= REQUIRED!";
          } else if (result.length <= 0) {
            errors.inputSearch = "Press F5 key";
          }
          // else if (result.length <= 0) { return <div><ErrorMSG/></div>}
          else if (!values.inputAmount) {
            errors.inputAmount = "REQUIRED! =>";
          } else if (!/\d+/.test(values.inputAmount)) {
            errors.inputAmount = "Only digits!";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleChange(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="controls__row">
            <Field
              className="input"
              type="inputSearch"
              name="inputSearch"
              tabIndex={0}
              placeholder={
                search === "bass" ? "Type something ..." : `${search}(s)`
              }
            />

            <ErrorMessage
              name="inputSearch"
              component="div"
              className="controls__row__error"
            />

            <button
              type="submit"
              className="controls__row__button"
              disabled={isSubmitting}
              tabIndex={0}
            >
              <div className="inner">search</div>
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
              className="controls__row__error"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Controls;
