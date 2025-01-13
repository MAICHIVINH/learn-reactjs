import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../compunents/form-controls/InputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
    onsubmit: PropTypes.func,
};

function
TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        }
    });

    const hadleSubmit = (values) => {
        console.log('TODO FORM: ', values);
    }
    return (
        <form onSubmit={form.handleSubmit(hadleSubmit)} >
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default
TodoForm;
