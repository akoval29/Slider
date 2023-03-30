import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../components/style/button.scss';
import '../components/style/app.css'

const ControlsBlock = ({result, handleChange, search, perPage, ErrorMSG}) => {
    return (
        <div className='block-controls'>
            <Formik
            initialValues={{ inputSearch: '', inputAmount: '' }}

            validate={values => {
                const errors = {};
                if (!values.inputSearch) {errors.inputSearch = '<= REQUIRED!';} 
                else if (result.length <= 0) {errors.inputSearch = 'Press F5 key';} 
                // else if (result.length <= 0) { return <div><ErrorMSG/></div>} 
                else if (!values.inputAmount) {errors.inputAmount = 'REQUIRED! =>';} 
                else if (!/\d+/.test(values.inputAmount)) {errors.inputAmount = 'Only digits!';}
                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                handleChange(values);
                setSubmitting(false);
            }}
            >
            {({ isSubmitting }) => (

                <Form className='row'>
                <Field 
                    className="input"
                    type="inputSearch" 
                    name="inputSearch" 
                    tabIndex={0}
                    placeholder={search === 'bass' ? 'Type something ...' : `${search}(s)`}
                    // placeholder='Type something ...'
                    // autoFocus
                />

                <ErrorMessage 
                    name="inputSearch" 
                    component="div"
                    className='error' 
                />

                <button 
                    type="submit" 
                    className="button button__main" 
                    disabled={isSubmitting}
                    tabIndex={0}
                >
                    <div className="inner">search</div>
                </button>

                <Field 
                    type="inputAmount" 
                    name="inputAmount" 
                    placeholder={`How many photos? (${perPage})`} 
                    // placeholder='How many photos ?'
                    className="input"
                    tabIndex={0}
                />

                <ErrorMessage 
                    name="inputAmount" 
                    component="div" 
                    className='error'
                />
                </Form>
            )}
            </Formik>
        </div>
    )
};

export default ControlsBlock