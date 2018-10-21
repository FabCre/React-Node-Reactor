/**
 * @function validate
 * @memberof Component.Signup
 * @param {object} values
 * @desc Front validation of data.
 */
export default function(values) {
  const errors = {};
  const requiredFields = [
    'user',
    'email',
    'password',
    'confirmPassword'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
    if (values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must be equals';
    }
  });
  return errors;
}
