import PropTypes from 'prop-types';

export const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  task: PropTypes.shape({})
};

export const defaultValues = {
  task: null,
};
